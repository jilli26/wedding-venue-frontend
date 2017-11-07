export function addFavorite(userId, venueId) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ userId, venueId })
    })
    .then(res => res.json())
    .then(favoritedItem => {
      dispatch({ type: 'SAVE_FAVORITE', favoritedItem })
    })
  }
}

export function deleteFavorite(favoriteId) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/favorites/:id', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ favoriteId })
    })
    .then(res => res.json())
    .then(favorite => dispatch({ type: 'DELETE_FAVORITE', favorite: favorite }))
  }
}
