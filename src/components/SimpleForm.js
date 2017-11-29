import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import { toggleShowMap } from '../actions/search'
import { bindActionCreators } from 'redux'
import { addLocation } from '../actions/search'
import { Button } from 'semantic-ui-react'

class SimpleForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => {this.setState({ address })
    this.handleSubmitSearchForm = this.handleSubmitSearchForm.bind(this)
  }
}

  handleSubmitSearchForm = (event) => {
  event.preventDefault()
  this.props.addLocation(this.state.address)

  let toggleValue
  this.props.latLng === "" ? toggleValue = false : toggleValue = true
  this.props.toggleShowMap(toggleValue)

  geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
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
        <div>
            <PlacesAutocomplete style={{marginTop: '0em', fontFamily: 'Nunito'}} inputProps={inputProps} /><br/>
            <Button fluid size="big" style={{marginTop: '0em', backgroundColor: '#FFF9C4'}}>Search</Button>
          </div>
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
