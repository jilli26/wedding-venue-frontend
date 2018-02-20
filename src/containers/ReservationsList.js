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
        {reservationList[0] ? reservationList : <p><i>Time to make your first booking!</i></p>}
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
}

export default connect(mapStateToProps)(ReservationsList)
