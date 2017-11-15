import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, NavLink, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import VenuesList from './containers/VenuesList'
import Venue from './containers/Venue'
import './styles/navbar.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchVenues } from './actions/venue.js'
import { setSearchLocation } from './actions/search.js'
import './index.css'
import 'react-dates/initialize';
import './styles/hoverparallax.css'
import SimpleForm from './components/SimpleForm'

// import SimpleMap from './components/MyMapComponent'
// import PlacesAutoCompleteForm from './components/PlacesAutoCompleteForm'

class App extends Component {

  searchLocation = (latlng) => {
    this.props.setSearchLocation(latlng)
  }

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
          {/* <div><img src='https://i.imgur.com/41Zf04d.png' height='90px' width='120px'/></div> */}

          <div className="searchBar">
            <SimpleForm searchLocation={this.searchLocation}/>
          </div>
          <div>
            <NavLink to='/signup' activeClassName="active">Sign Up</NavLink>
            <NavLink to='/login' activeClassName="active">Log In</NavLink>
            <NavLink to='/profile' activeClassName="active">Profile</NavLink>
            <NavLink to='/' activeClassName="active" onClick={this.handleFetch}>Home</NavLink>
          </div>
        </div>
        <div className="App">
          <br/><br/>

        </div>
        <div>
        <Switch>
          <Route exact path='/venues/:id' component={Venue} />
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
    username: 'jilli26',
    latlng: state.searchesReducer.latlng
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenues, setSearchLocation }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
