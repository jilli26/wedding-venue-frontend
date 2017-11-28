import React, { Component } from 'react';
import '../App.css';
import { Route, withRouter, NavLink, Switch, Redirect } from 'react-router-dom'
import Profile from '../components/Profile'
import LoginForm from '../components/LoginForm'
import VenuesList from '../containers/VenuesList'
import Venue from '../containers/Venue'
import '../styles/navbar.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchVenues } from '../actions/venue.js'
import { setSearchLocation } from '../actions/search.js'
import '../index.css'
import 'react-dates/initialize';
import '../styles/hoverparallax.css'
import SimpleForm from '../components/SimpleForm'
import HomePageImage from '../components/HomePageImage'
import SiteDescription from '../components/SiteDescription'
import { Image } from 'semantic-ui-react'

class HomePage extends Component {

  state = {
    redirect: false
  }

  searchLocation = (latlng) => {
    console.log('in searchLocation');
    this.props.setSearchLocation(latlng)
    this.props.history.push('/searchresults')
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

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/searchresults'/>;
    }

    return (
      <div>
        <div className="navbar">
          {/* <div><img src='https://i.imgur.com/41Zf04d.png' height='90px' width='120px'/></div> */}
          <div>
            <NavLink to='/signup' activeClassName="active">Log Out</NavLink>
            {/* <NavLink to='/login' activeClassName="active">Log In</NavLink> */}
            <NavLink to='/profile' activeClassName="active">Profile</NavLink>
            <NavLink to='/' activeClassName="active" onClick={this.handleFetch}>Home</NavLink>
          </div>
        </div>
        <div className="App">
          <br/><br/>
          <div className="searchBar">
            <img src='https://i.imgur.com/QJoFwDb.png' alt='hitched-logo'/>
            <SimpleForm searchLocation={this.searchLocation}/>
          </div>
        </div>
        <div>
          <HomePageImage/>
          <center><br/>
          <div className='main-margins'>
            <SiteDescription/><br/><br/>
            <Image.Group size='medium'>
              <Image src='https://i.imgur.com/pPweSqT.jpg'/>
              <Image src='https://i.imgur.com/EvsJYgO.jpg' />
              <Image src='https://i.imgur.com/fVEyuPK.jpg'/>
              <Image src='https://i.imgur.com/pfzsXUH.jpg' />
              <Image src='https://i.imgur.com/d9cODFg.jpg' />
              <Image src='https://i.imgur.com/NOx11qS.jpg' />
            </Image.Group>

          </div>
          </center>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state.venuesReducer,
    username: 'jilli26',
    latlng: state.searchesReducer.latlng
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenues, setSearchLocation }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
