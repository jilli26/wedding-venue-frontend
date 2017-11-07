export default function reservationsReducer(state = {reservations: [], date: []}, action) {
  switch (action.type) {
    case "SET_BOOKING_DATE":
      console.log(action.date);
      return {...state, reservations: state.reservations, date: action.date}
    // case "MAKE_RESERVATION":
    //   return Object.assign({}, state, {reservations: action.reservation})
    default:
      return state
  }
}
