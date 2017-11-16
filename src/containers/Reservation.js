import React from 'react'
// import '../index.css'
import { deleteReservation } from '../actions/reservation'
import { editReservation } from '../actions/reservation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from './Calendar'
import { setBookingDate } from '../actions/reservation'
import CancellationModal from '../components/CancellationModal'
// import '../styles/profilehoverparallax.css'
import { Link } from 'react-router-dom'
import '../styles/profile.css'
import { Button } from 'semantic-ui-react'
import { showVenue } from '../actions/venue'
import { withRouter } from 'react-router-dom'

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

  handleShowVenue = (e) => {
    e.preventDefault()
    const venueId = this.props.venueId
    this.props.showVenue(venueId)
    this.props.history.push(`/venues/${venueId}`)
  }

  render() {
    console.log(this.props.reservationDate);
    // const date = this.props.start
    const date = this.props.reservationDate
    const newDate = new Date(date)

    // debugger

    var options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const finalDate = newDate.toLocaleTimeString("en-us", options)

    const spelledOutDate = (finalDate.split(' ').slice(0,4).toString()).replace(/[, ]+/g, " ").trim()

    return (
  // <div className="wrapper">
  //   <div className="cols">

      // <div className="col" ontouchstart="this.classList.toggle('hover')">
      //   <Link to={`venues/${this.props.venueId}`}>
      //   <div className="container" onClick={this.handleVenueClick}>
      //     <div className="front" >
      //       <div className="inner" >
      //         <p>{this.props.venue.title ? this.props.venue.title : null}</p>
      //         <span>{this.props.venue.city ? this.props.venue.city : null}, {this.props.venue.state}</span>
      //         <p>{spelledOutDate}</p><br/>
      //       </div>
      //     </div>
      //     <div className="back" >
      //       <div className="inner" >
      //         <p>Modify your reservation?</p><Calendar getBookingDate={this.getBookingDate}/><button className='button' onClick={this.handleBookingEdit}>Edit</button><br/><br/>
      //         <p>Cancel your reservation?</p>
      //         {/* <button className='button' onClick={this.handleDelete}>Cancel</button> */}
      //         <CancellationModal handleDelete={this.handleDelete}/>
      //       </div>
      //     </div>
      //   </div>
      // </Link>
      // </div>
  // <div className="wrapper">
  //   <div className="cols">
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

  //   </div>
  // </div>
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
