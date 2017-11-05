export function fetchVenues() {
  return (dispatch) => {
    // dispatch({ type: 'FETCH_VENUES' })
    return fetch('http://localhost:3000/api/v1/venues', {
      // headers: {
      //   Authorization: 'Bearer ' + localStorage.getItem('jwt')
      // }
    })
      .then(res => res.json())
      .then(venueData => dispatch({ type: 'FETCH_VENUES',  venueData }))
  }
}

export function showVenue(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/venues/${id}`, {
      // headers: {
      //   Authorization: 'Bearer ' + localStorage.getItem('jwt')
      // }
    })
      .then(res => res.json())
      .then(singleVenueData => {
        dispatch({ type: 'SHOW_VENUE',  singleVenueData })
      })
  }
}
