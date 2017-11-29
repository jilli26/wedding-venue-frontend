export default function searchesReducer(state = {latlng: '', stateLocation: '', showMap: false, selectedVenues: [], selectedCapacities: [], finalSelection: [] }, action) {
  switch (action.type) {

    case 'CLEAR_SEARCH_RESULTS':
    console.log(action.payload);
    return {...state, finalSelection: action.payload}

    case "SET_SEARCH_LOCATION":
      return {...state, latlng: action.payload, showMap: state.showMap, selectedVenues: state.selectedVenues, selectedCapacities: state.selectedCapacities, finalSelection: state.finalSelection}

    case "ADD_LOCATION":

    let test
    let str = action.payload
    let regexp = /\b[A-Z]{2}\b/;
    regexp.test(str) ? test = (str.match(regexp)) : test = str

      return {...state, stateLocation: test, showMap: state.showMap, selectedVenues: state.selectedVenues, selectedCapacities: state.selectedCapacities, finalSelection: state.finalSelection}

    case "TOGGLE_SHOW_MAP":
      return {...state, showMap: action.payload, selectedVenues: state.selectedVenues, selectedCapacities: state.selectedCapacities, finalSelection: state.finalSelection}

    case "SELECT_CATEGORIES":
      console.log(action.payload.selected_venues);

    function findSelectedVenues() {
      var selectedVenues = action.payload.selected_venues // categories => []
      var selectedCapacities = state.selectedCapacities // capacities =>
      let match
      if (selectedCapacities.length === 0 || selectedCapacities === null || selectedCapacities === undefined) {
        match = selectedVenues
      } else if (selectedVenues.length === 0 ) {
        match = selectedCapacities
      } else {
        match = selectedVenues.filter((c) => {
          const venuesMatched = selectedCapacities.filter((v) => {
            return v.id === c.id
          })
          return !(venuesMatched.length === 0)
        })
      }

      console.log(match)
      return match
    }

    const finalSelected = findSelectedVenues()

    return {...state, selectedVenues: action.payload.selected_venues, finalSelection: finalSelected}

      // return {...state, selectedVenues: action.payload.selected_venues}

    case "SELECT_CAPACITY":
      console.log(action.payload.venues_with_selected_capacity);

      function findSelectedCapacities() {
        // var unique = {}
        var selectedVenues = state.selectedVenues
        var selectedCapacities = action.payload.venues_with_selected_capacity
        let match
        if (selectedVenues.length === 0 || selectedVenues === null || selectedVenues === undefined) {
          match = selectedCapacities
        } else if (selectedCapacities === null || selectedCapacities === undefined) {
          match = selectedVenues
        } else {
          if (selectedCapacities) {
            match = selectedCapacities.filter((c) =>  {
              const venuesMatched = selectedVenues.filter((v) => {
                return v.id === c.id
              })
              return !(venuesMatched.length === 0)
            })
          }

        }

          // if there is a match venuesMatched is an array
          // if not its empty
          // we want where its not empty
          // we need to return a truthy value to tell the filter which capacity to include
        console.log(match)

        // if (!selectedVenues && selectedCapacities) {
        //   selectedCapacities.forEach(venue => {
        //     unique[venue.id] = venue
        //   })
        // } else if (selectedVenues && !selectedCapacities) {
        //   selectedVenues.forEach(venue => {
        //     unique[venue.id] = venue
        //   })
        // } else if (selectedVenues && selectedCapacities) {
        //   selectedCapacities.forEach(venue => {
        //     unique[venue.id] = null
        //   })
        //   selectedVenues.forEach(venue => {
        //     unique[venue.id] = venue
        //   })
        // } else {
        //     unique = null
        //   }
        //
        // var uniqueValues = Object.values(unique)
        // var finalSelectedVenues = uniqueValues.filter(value => value !== null)
        return match
      }

      const finalSelectedCapacities = findSelectedCapacities()

      return {...state, selectedCapacities: action.payload.venues_with_selected_capacity, finalSelection: finalSelectedCapacities}

      // var selectedVenues = state.selectedVenues
      // var selectedCapacities = action.payload.venues_with_selected_capacity

      // function areDifferentByIds(selectedVenues, selectedCapacities) {
      //   var selectedVenues = state.selectedVenues
      //   var selectedCapacities = action.payload.venues_with_selected_capacity
      //   if (selectedVenues === undefined) {
      //     return []
      //   } else {
      //     var idsA = selectedVenues.map(x => x.id);
      //     var idsB = selectedCapacities.map(x => x.id);
      //     var idsAB = idsA.concat(idsB);
      //     //this is the set of unique ids we want to display - we need to make this set equal to the finalSelection
      //     var unique = [ ...new Set(idsAB)]
      //     return unique
      //   }
      // }

      // const comparison = areDifferentByIds(selectedVenues, selectedCapacities)
      //
      // function findSelectedVenues() {
      //   var selectedVenues = state.selectedVenues
      //   var selectedCapacities = action.payload.venues_with_selected_capacity
      //   var combinedVenuesAndCapacities = selectedVenues.concat(selectedCapacities)
      //   var unique = {}
      //   combinedVenuesAndCapacities.forEach(venue => {
      //     if (!unique[venue.id] ) {
      //       unique[venue.id] = venue
      //     }
      //   })
      //   var uniqueValues = Object.values(unique)
      //
      //   return uniqueValues
      // }

    default:
      return state
  }
}
