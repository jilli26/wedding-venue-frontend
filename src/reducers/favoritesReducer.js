export default function favoritesReducer(state = {venues: []}, action) {
  switch (action.type) {
    case "SAVE_FAVORITE":
      return Object.assign({}, state, {venues: action.favoritedItem})
    default:
      return state
  }
}
