import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class PlacesAutoCompleteForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    address: '',
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCE0THV62FykF_Vi7Bka6fp1IQUEB7QtmM&libraries=places",
  }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.handleLatLng(latLng))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      placeholder: 'Enter location',
      onChange: this.onChange,
    }

    return (
      <form onBlur={this.handleFormSubmit} >
        <PlacesAutocomplete inputProps={inputProps} />
      </form>
    )
  }
}

export default PlacesAutoCompleteForm;
