export default function reservationsReducer(state = {reservations: []}, action) {
  switch (action.type) {
    case "MAKE_RESERVATION":
      return Object.assign({}, state, {reservations: action.reservation})
    default:
      return state
  }
}
