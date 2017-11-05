import React from 'react'
import { connect } from 'react-redux'
import { showVenue } from '../actions/venue'
import { bindActionCreators } from 'redux'
import { addFavorite } from '../actions/favorite'
import Calendar from './Calendar'
import { makeReservation } from '../actions/reservation'

class Venue extends React.Component {

  state = {
    date: ''
  }

  handleFavorite = (e) => {
    const userId = this.props.userId
    const venueId = e.target.id
    this.props.addFavorite(userId, venueId)
  }

  getBookingDate = (date) => {
    this.setState({
      date
    })
  }

  handleBooking = (e) => {
    const userId = this.props.userId
    const venueId = e.target.id
    const date = this.state.date
    this.props.makeReservation(userId, venueId, date)
  }

  render() {
    return (
      <div id={this.props.id} onClick={this.handleVenueClick}>
        <h4 id={this.props.id}>{this.props.title}</h4>
        <p id={this.props.id}>{this.props.location}</p>

        <Calendar getBookingDate={this.getBookingDate}/>
        <button id={this.props.id} onClick={this.handleBooking}>Book</button><br/>


        <button id={this.props.id} onClick={this.handleFavorite}>Favorite</button>

        <p id={this.props.id}>{this.props.description}</p>
        <p id={this.props.id}>Pricing: ${this.props.pricing}</p>
        <p id={this.props.id}>Capacity: {this.props.capacity} people</p>
        <p id={this.props.id}>Amenities: {this.props.amenities}</p>
        <p id={this.props.id}>Availability: {this.props.availability}</p>
        <p id={this.props.id}>Category: {this.props.category}</p>
        <p id={this.props.id}>Size: {this.props.size}</p>
        <p id={this.props.id}>Cancellation: {this.props.cancellation}</p>
        <p id={this.props.id}>Security Deposit: {this.props.security_deposit}</p>
        <p id={this.props.id}>Accessibility: {this.props.accessibility}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { userId: state.usersReducer.id }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showVenue, addFavorite, makeReservation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)