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
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    }
  }

  // handleSelectChange(value) {
  //   console.log('You\'ve selected:', value);
  //   this.setState({ value });
  // }

  handleSelectChange(value) {
    //need to get the state of the current search parameter - use regex to find two capital letters ^[A-Z]{2}$
    console.log('Selected: ', value);
    //dispatch an action that will set the state to whatever is the val.value is
    this.setState({
      capacity: value
    }, () => {
      var capacity = this.state.capacity
      var location = this.props.location

      // console.log(e.value)
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

    // const test = crazy ? WHY_WOULD_YOU : options;
    // const WHY_WOULD_YOU = [
    // 	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
    // ].concat(options.slice(1));

    return (
      <div className="capacity-selector">
      <h3>NUMBER OF GUESTS</h3>
        <Select
          name="form-field-name"
          value={this.state.capacity}
          options={options}
          onChange={this.handleSelectChange}
          multi={true}
          // joinValues
          closeOnSelect={!stayOpen}
          disabled={disabled}
          // onChange={this.handleSelectChange}
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
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
