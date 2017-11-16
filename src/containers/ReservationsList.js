import React from 'react'
import Reservation from './Reservation'
import { connect } from 'react-redux'

class ReservationsList extends React.Component {

  render() {
    let reservationList
    reservationList = this.props.reservations.map(item => {
      return <Reservation key={item.id} {...item} />
    })

    return (
      <div>
      <h2>Your Reservations</h2><br/>
      <div className="wrapper">
        <div className="cols">

        {reservationList}
      </div>
    </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reservations: state.usersReducer.reservations
   }
  //also want to iterate through this.props.venues and first collect all the reservations; then once we have that array, see where the reservation.user_id === current user id
}

export default connect(mapStateToProps)(ReservationsList)
