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
    .then(reservation => {
      dispatch({ type: 'MAKE_RESERVATION', reservation })
    })
  }
}
