export default function usersReducer(state = { username: 'jilli26', id: 1, favorites: { favoritedItems: [], favoritedVenueData: [] }, reservation: []}, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      console.log({...state, username: action.payload.username, id: action.payload.id});
      return {...state, username: action.payload.username, id: action.payload.id}
    case 'FETCH_PROFILE_DATA':
      //need to also add reservation to the state after fetching from backend since we have all profileData
      return { username: state.username, id: state.id, favorites: { favoritedItems: action.profileData.favorites, favoritedVenueData: []} }
    case 'FETCH_FAV_VENUE_DATA':
      var flattened = action.userFavedVenues.user_fav_venues.reduce(
        function(a, b) {
          return a.concat(b);
        },
        []
      );
      return {...state, username: state.username, id: state.id,
        favorites: {
          ...state.favorites,
          favoritedVenueData: flattened
        }
      }
    default:
      return state
  }
}
