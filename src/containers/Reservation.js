import React from 'react'
import { deleteReservation } from '../actions/reservation'
import { editReservation } from '../actions/reservation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from './Calendar'
import { setBookingDate } from '../actions/reservation'
import CancellationModal from '../components/CancellationModal'
import { Link } from 'react-router-dom'
import '../styles/profile.css'
import { Button } from 'semantic-ui-react'
import { showVenue } from '../actions/venue'
import { withRouter } from 'react-router-dom'

class Reservation extends React.Component {

  handleDelete = (e) => {
    e.preventDefault()
    const reservationId = this.props.id
    console.log(reservationId);
    this.props.deleteReservation(reservationId)
  }

  getBookingDate = (date) => {
    this.props.setBookingDate(date)
  }

  handleBookingEdit = (e) => {
    e.preventDefault()
    const reservationId = this.props.id
    const newDate = this.props.date
    this.props.editReservation(reservationId, newDate)
  }

  handleShowVenue = (e) => {
    e.preventDefault()
    const venueId = this.props.venueId
    this.props.showVenue(venueId)
    this.props.history.push(`/venues/${venueId}`)
  }

  render() {
    const date = this.props.reservationDate
    const newDate = new Date(date)

    var options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const finalDate = newDate.toLocaleTimeString("en-us", options)

    const spelledOutDate = (finalDate.split(' ').slice(0,4).toString()).replace(/[, ]+/g, " ").trim()

    return (
      <div className="col" ontouchstart="this.classList.toggle('hover')">
      <div className="reservation">
        <Link to={`venues/${this.props.venueId}`} onClick={this.handleShowVenue}><h3>{this.props.venue.title ? this.props.venue.title : null}</h3></Link>
        <h4>{this.props.venue.city ? this.props.venue.city : null}, {this.props.venue.state}</h4>
        <h4>{spelledOutDate}</h4><br/>
        <p>Modify your reservation?</p><Calendar getBookingDate={this.getBookingDate}/><br/><Button size="medium" className='button' onClick={this.handleBookingEdit}>Edit</Button><br/><br/>
        <p>Cancel your reservation?</p>
        {/* <button className='button' onClick={this.handleDelete}>Cancel</button> */}
        <CancellationModal handleDelete={this.handleDelete}/>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const reservationId = ownProps.id
  let reservationDate = null
  let venueId = null
  if (reservationId) {
    reservationDate = state.usersReducer.reservations.find(res => res.id === reservationId).start
    venueId = state.usersReducer.reservations.find(res => res.id === reservationId).venue_id
  }
  return {
    userId: state.usersReducer.id,
    date: state.reservationsReducer.date,
    reservationDate,
    venueId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteReservation, editReservation, setBookingDate, showVenue }, dispatch )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reservation))
