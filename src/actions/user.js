export function loginUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(response => response.json())
    .then(userData => dispatch(setCurrentUser(userData)))
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}

export function fetchProfileData(user) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username: user.username}})
    })
      .then(res => res.json())
      .then(profileData => dispatch({ type: 'FETCH_PROFILE_DATA', profileData }))
      // .then(profileData =>
      //   dispatch({ type: 'FETCH_PROFILE_DATA', profileData }))
      // .then(payload => dispatch(chain(
      //   // getRezIds(payload),
      //   getFavIds(payload)
      // )))
  }
}

// export function getFavIds(payload) {
//   const favorites = payload.profileData.favorites
//   return (dispatch) => {
//     fetch('http://localhost:3000/api/v1/user_favs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({favorites: favorites})
//     })
//     .then(res => res.json())
//     .then(userFavedVenues => dispatch({ type: 'FETCH_FAV_VENUE_DATA', userFavedVenues }))
//   }
// }

// export function getRezIds(payload) {
//   const reservations = payload.profileData.reservations
//   return (dispatch) => {
//
//     fetch('http://localhost:3000/api/v1/user_reservations', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({reservations: reservations})
//     })
//     .then(res => res.json())
//     .then(userReservations => dispatch({ type: 'FETCH_RESERVATION_DATA', userReservations: userReservations }))
//   }
// }
