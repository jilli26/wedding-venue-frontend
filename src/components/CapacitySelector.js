import React from 'react'
import Select from 'react-select';
import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCapacity } from '../actions/search'
import '../styles/dropdown.css'

class CapacitySelector extends React.Component {

  constructor() {
    super()
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.state = {
      capacity: [],
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      value: [],
      // rtl: false,
    }
  }


  handleSelectChange(value) {
    console.log('Selected: ', value);
    this.setState({
      capacity: value
    }, () => {
      var capacity = this.state.capacity
      var location = this.props.location

      this.props.selectCapacity(capacity, location)
    })
  }

  render() {

    const { disabled, stayOpen } = this.state

    var options = [
      { value: '50-100', label: '50-100' },
      { value: '100-200', label: '100-200'},
      { value: '200-300', label: '200-300'},
      { value: '300-600', label: '300-600'},
    ];


    return (
      <div className="capacity-selector">
      <h3>NUMBER OF GUESTS</h3>
        <Select
          name="form-field-name"
          value={this.state.capacity}
          options={options}
          onChange={this.handleSelectChange}
          multi={true}
          closeOnSelect={!stayOpen}
          disabled={disabled}
          removeSelected={this.state.removeSelected}
          // rtl={this.state.rtl}
          simpleValue
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.searchesReducer.stateLocation
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCapacity }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CapacitySelector)
