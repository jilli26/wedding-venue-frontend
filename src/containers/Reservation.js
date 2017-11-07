import React from 'react'
// import '../index.css'
import { deleteReservation } from '../actions/reservation'
import { editReservation } from '../actions/reservation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from './Calendar'
import { setBookingDate } from '../actions/reservation'

class Reservation extends React.Component {

  // state = {
  //   date: ''
  // }

  handleDelete = (e) => {
    e.preventDefault()
    const reservationId = this.props.id
    console.log(reservationId);
    this.props.deleteReservation(reservationId)
  }

  getBookingDate = (date) => {
    // this.setState({
    //   date
    // })
    this.props.setBookingDate(date)
  }

  handleBookingEdit = (e) => {
    e.preventDefault()
    // const userId = this.props.userId
    // const venueId = this.props.id
    // const date = this.state.date
    const reservationId = this.props.id
    const newDate = this.props.date
    console.log(newDate);
    this.props.editReservation(reservationId, newDate)
  }

  render() {
    console.log(this.props.reservationDate);
    // const date = this.props.start
    const date = this.props.reservationDate
    const newDate = new Date(date)

    var options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const finalDate = newDate.toLocaleTimeString("en-us", options)

    const spelledOutDate = (finalDate.split(' ').slice(0,4).toString()).replace(/[, ]+/g, " ").trim()

    return (
      <div>
        <h3>{this.props.venue.title}</h3>
        <h4>{this.props.venue.location}</h4>
        <h4>{spelledOutDate}</h4><br/>
        <button className='button' onClick={this.handleDelete}>Delete</button>
        <Calendar getBookingDate={this.getBookingDate}/><button className='button' onClick={this.handleBookingEdit}>Edit Reservation </button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const reservationId = ownProps.id
  let reservationDate = null
  if (reservationId) {
    reservationDate = state.usersReducer.reservations.find(res => res.id === reservationId).start
  }
  return {
    userId: state.usersReducer.id,
    date: state.reservationsReducer.date,
    reservationDate
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteReservation, editReservation, setBookingDate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservation)
