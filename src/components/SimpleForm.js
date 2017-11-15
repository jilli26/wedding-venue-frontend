import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import { toggleShowMap } from '../actions/search'
import { bindActionCreators } from 'redux'
import { addLocation } from '../actions/search'

class SimpleForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => {this.setState({ address })
      //dispatch an action to set the state to whatever the state is
    this.handleSubmitSearchForm = this.handleSubmitSearchForm.bind(this)
  }
}

  handleSubmitSearchForm = (event) => {
  event.preventDefault()
  this.props.addLocation(this.state.address)
  //need to dispatch an action to toggle showMap to true
  let toggleValue
  this.props.latLng === "" ? toggleValue = false : toggleValue = true
  this.props.toggleShowMap(toggleValue)
  // this.props.fetchSearchResults()

  geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
    // .then(latLng => console.logstate(latLng))
    .then(latLng => this.props.searchLocation(latLng))
    .catch(error => console.error('Error', error))
}

  render() {

    const inputProps = {
      value: this.state.address,
      placeholder: "Search Location",
      onChange: this.onChange,
    }

    return (
      <form className="button" onSubmit={this.handleSubmitSearchForm}>
            <PlacesAutocomplete inputProps={inputProps} /><button>Submit</button>
       </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    showMap: state.searchesReducer.showMap,
    latLng: state.searchesReducer.latLng
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleShowMap, addLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm)