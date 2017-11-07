export function setBookingDate(date) {
  return {
    type: 'SET_BOOKING_DATE',
    date: date
  }
}

export function makeReservation(userId, venueId, date) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ userId, venueId, date })
    })
    .then(res => res.json())
    .then(reservation => dispatch({ type: 'MAKE_RESERVATION', reservation: reservation }))
  }
}

export function deleteReservation(reservationId) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/reservations/:id', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ reservationId })
    })
    .then(res => res.json())
    .then(reservation => dispatch({ type: 'DELETE_RESERVATION', reservation: reservation }))
  }
}

export function editReservation(reservationId, newDate) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/reservations/:id', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ reservation: { id: reservationId, start: newDate} })
    })
    .then(res => res.json())
    .then(reservation => dispatch({ type: 'EDIT_RESERVATION', reservation: reservation }))
  }
}
