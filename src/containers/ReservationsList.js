import React from 'react'
import Reservation from './Reservation'
import { connect } from 'react-redux'

class ReservationsList extends React.Component {

  render() {
    const reservationsList = this.props.reservations.map((rezzie) => {
      return <Reservation key={rezzie.id} {...rezzie}/>
    })
    return (
      <div>
        <h2>Your Reservations</h2>
        {reservationsList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { reservations: state.reservationsReducer.reservations }
}

export default connect(mapStateToProps)(ReservationsList)
