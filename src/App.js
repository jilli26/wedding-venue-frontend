import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, NavLink, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import VenuesList from './containers/VenuesList'
import './styles/navbar.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchVenues } from './actions/venue.js'
import './index.css'
import 'react-dates/initialize';
import HomePageImage from './components/HomePageImage'
import './styles/hoverparallax.css'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchVenues()
  }

  handleFetch = () => {
    this.props.fetchVenues()
    // this.setState({
    //   username: localStorage.getItem('username')
    // })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavLink to='/signup' activeClassName="active">Sign Up</NavLink>
          <NavLink to='/login' activeClassName="active">Log In</NavLink>
          <NavLink to='/profile' activeClassName="active">Profile</NavLink>
          <NavLink to='/' activeClassName="active" onClick={this.handleFetch}>Home</NavLink>
        </div>
        <div className="App">
          <br/><br/>

        </div>
        <div>
        <Switch>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/signup' />
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/list'/>
          <Route exact path='/' component={VenuesList}/>
        </Switch>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state.venuesReducer,
    // ...state.usersReducer
    username: 'jilli26'
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenues: fetchVenues }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
