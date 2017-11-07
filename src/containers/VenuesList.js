import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Venue from './Venue.js'
import { showVenue } from '../actions/venue'
import '../styles/card.css'
import HomePageImage from '../components/HomePageImage'
// import { Route, NavLink, Switch } from 'react-router-dom'



class VenuesList extends React.Component {

  handleVenueClick = (event) => {
    const id = event.target.id
    this.props.showVenue(id)
  }

  render() {

    // const imgUrl = 'https://i.imgur.com/ioooeVy.jpg'
    // style={{backgroundImage: `url(${imgUrl})`}}
    // style={{ backgroundImage: `url(${imageUrl})` }}

    let singleVenue = <Venue {...this.props.venues[0]}/>

    let listVenues = this.props.venues.map(venue => {
      return (
              <div className="col" id={venue.id} ontouchstart="this.classList.toggle('hover');">
                <div className="container" id={venue.id} onClick={this.handleVenueClick}>
                  <div className="front" id={venue.id} >
                    <div className="inner" id={venue.id} >
                      <p id={venue.id} >{venue.title}</p>
                      <span id={venue.id} >{venue.location}</span>
                    </div>
                  </div>
                  <div className="back" id={venue.id} >
                    <div className="inner" id={venue.id} >
                      <p id={venue.id} >Pricing: ${venue.pricing}</p>
                      <p id={venue.id} >Capacity: {venue.capacity} people</p>
                    </div>
                  </div>
                </div>
              </div>
      )
    })

    return (
      <div><br/>
      {this.props.venues.length === 1 ? null : <HomePageImage/>}
      <div className="wrapper">
        <div className="cols">
          {this.props.venues.length === 1 ? singleVenue : listVenues}
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {...state.venuesReducer}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showVenue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VenuesList)
