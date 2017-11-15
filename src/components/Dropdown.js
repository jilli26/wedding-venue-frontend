import React from 'react'
import Select from 'react-select';
import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategory } from '../actions/search'
import '../styles/dropdown.css'

class Dropdown extends React.Component {

  constructor() {
    super()
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.state = {
      categories: [],
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

  handleDropdownChange(value) {
    //need to get the state of the current search parameter - use regex to find two capital letters ^[A-Z]{2}$
    console.log('Selected: ', value);
    //dispatch an action that will set the state to whatever is the val.value is
    this.setState({
      categories: value
    }, () => {
      var categories = this.state.categories
      var location = this.props.location
      // console.log(e.value)
      this.props.selectCategory(categories, location)
    })
  }

  render() {

    const { disabled, stayOpen } = this.state

    var options = [
      { value: 'outdoor', label: 'Outdoor' },
      { value: 'hotel', label: 'Hotel'},
      { value: 'historic', label: 'Historic'},
      { value: 'castle', label: 'Castle'},
      { value: 'clubhouse', label: 'Clubhouse'},
      { value: 'winery', label: 'Winery'}
    ];

    // const test = crazy ? WHY_WOULD_YOU : options;
    //
    // const WHY_WOULD_YOU = [
    // 	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
    // ].concat(options.slice(1));

    return (
      <div className="category-selector">
        <h3>Venue Categories</h3>
        <Select
          name="form-field-name"
          value={this.state.categories}
          options={options}
          onChange={this.handleDropdownChange}
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
  return bindActionCreators({ selectCategory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
