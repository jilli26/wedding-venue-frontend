export default function venuesReducer(state = {loading: false, venues: []}, action) {
  switch (action.type) {
    case "LOADING_VENUES":
      return Object.assign({}, state, {loading: true})
    case "FETCH_VENUES":
      return {loading: false, venues: action.venueData}
    case 'SHOW_VENUE':
      return {loading: false, venues: [action.singleVenueData]}
    default:
      return state
  }
}
