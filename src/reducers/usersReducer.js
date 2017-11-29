export default function usersReducer(state = {
  username: 'jilli26',
  id: 1,
  favorites: [],
  reservations: []
}, action) {

  switch (action.type) {

    case "SET_CURRENT_USER":
      return {...state, username: action.payload.username, id: action.payload.id}

    case 'FETCH_PROFILE_DATA':
      return { username: state.username, id: state.id, favorites: action.profileData.favorites, reservations: action.profileData.reservations }

    case 'FETCH_FAV_VENUE_DATA':
      var flattenedFavs = action.userFavedVenues.user_fav_venues.reduce(
        function(a, b) {
          return a.concat(b);
        },
        []
      );
      return {...state, username: state.username, id: state.id,
        favorites: {
          ...state.favorites,
          favoritedVenueData: flattenedFavs
        },
        reservations: {
          ...state.reservations
        }
      }

    case 'FETCH_RESERVATION_DATA':
      return {...state, username: state.username, id: state.id,
        favorites: {
          ...state.favorites
        },
        reservations: {
          reservationItems: action.userReservations
        }
      }

    case "MAKE_RESERVATION":
      return Object.assign({}, state, {reservations: [...state.reservations, action.reservation]})

    case "DELETE_RESERVATION":
      const deletedItem = state.reservations.find(res => res.id === action.reservation.id)
      const newReservationArray = state.reservations.filter(res => res.id !== action.reservation.id)
      return Object.assign({}, state, {reservations: newReservationArray})

    case "DELETE_FAVORITE":
      const deletedFav = state.favorites.find(fav => fav.id === action.favorite.id)
      const newFavoriteArray = state.favorites.filter(fav => fav.id !== action.favorite.id)
      return Object.assign({}, state, {favorites: newFavoriteArray})

    case "EDIT_RESERVATION":

      const foundItem = state.reservations.findIndex(res => res.id === action.reservation.id)
      state.reservations[foundItem] = action.reservation
      return Object.assign({}, state, { reservations: state.reservations })

    default:
      return state
  }
}
