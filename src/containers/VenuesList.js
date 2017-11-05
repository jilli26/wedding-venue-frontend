import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Venue from './Venue.js'
import { showVenue } from '../actions/venue'
import { card } from '../styles/card.css'


class VenuesList extends React.Component {

  handleVenueClick = (event) => {
    const id = event.target.id
    this.props.showVenue(id)
  }

  render() {
    let singleVenue = <Venue {...this.props.venues[0]}/>

    let listVenues = this.props.venues.map(venue => {
      return (
        <div className='card'>
          {/* <img src='' /> */}
          <div>
            <div id={venue.id} onClick={this.handleVenueClick} >
              <h3 id={venue.id}>{venue.title}</h3>
              <p id={venue.id}>{venue.location}</p>
              {/* <p id={venue.id}>{venue.description}</p> */}
              <p id={venue.id}>Pricing: ${venue.pricing}</p>
              <p id={venue.id}>Capacity: {venue.capacity} people</p><br/>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        {this.props.venues.length === 1 ? singleVenue : listVenues}
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
