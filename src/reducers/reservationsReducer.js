export default function reservationsReducer(state = {reservations: [], date: []}, action) {
  switch (action.type) {
    case "SET_BOOKING_DATE":
      return {...state, reservations: state.reservations, date: action.date}
    default:
      return state
  }
}
