import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, NavLink, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import VenuesList from './containers/VenuesList'
import Navbar from './styles/navbar.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchVenues } from './actions/venue.js'
import index from './index.css'
import 'react-dates/initialize';
import HomePageImage from './components/HomePageImage'
import hoverparallax from './styles/hoverparallax.css'

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

    const imgUrl = 'https://i.imgur.com/ioooeVy.jpg'

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
        <HomePageImage/>
        <h1 className="title">Wedding Venues</h1>
        <div className="wrapper">
          {/* <h1 className="title">Hottest Venues</h1> */}
          <div className="cols">
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" style={{backgroundImage: `url(${imgUrl})`}}>


                  {/* style={{ backgroundImage: `url(${imageUrl})` }} */}
        						<div className="inner">
        							<p>Diligord</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Rocogged</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Strizzes</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Clossyo</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Rendann</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Reflupper</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Acirassi</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classList.toggle('hover');">
        				<div className="container">
        					<div className="front" >
        						<div className="inner">
        							<p>Sohanidd</p>
                      <span>Lorem ipsum</span>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
         </div>
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
