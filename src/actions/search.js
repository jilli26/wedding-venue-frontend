export function clearSearchResults() {
  return {
    type: 'CLEAR_SEARCH_RESULTS',
    payload: []
  }
}

export function setSearchLocation(latlng) {
  return {
    type: 'SET_SEARCH_LOCATION',
    payload: latlng
  }
}

export function addLocation(address) {
  return {
    type: 'ADD_LOCATION',
    payload: address
  }
}

export function toggleShowMap(toggleValue) {
  return {
    type: 'TOGGLE_SHOW_MAP',
    payload: toggleValue
  }
}

export function selectCategory(categories, location) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/venues/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ categories, location })
    })
    .then(res => res.json())
    .then(venueData => dispatch({ type: 'SELECT_CATEGORIES', payload: venueData}))
  }
}

export function selectCapacity(capacity, location) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/venues/capacity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ capacity, location })
    })
    .then(res => res.json())
    // .then(venueData => console.log(venueData))
    .then(venueData => dispatch({ type: 'SELECT_CAPACITY', payload: venueData}))
  }
}
