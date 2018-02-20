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
      stayOpen: false,
      value: [],
      // rtl: false,
    }
  }

  handleDropdownChange(value) {
    console.log('Selected: ', value);
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
      { value: 'clubhouse', label: 'Country Club'},
      { value: 'winery', label: 'Winery'},
      { value: 'art gallery', label: 'Art Gallery'},
      { value: 'museum', label: 'Museum'},
      { value: 'restaurant', label: 'Restaurant'},
      { value: 'bookstore', label: 'Bookstore'},
    ];


    return (
      <div className="category-selector">
        <h3>VENUE CATEGORIES</h3>
        <Select
          name="form-field-name"
          value={this.state.categories}
          options={options}
          onChange={this.handleDropdownChange}
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
  return bindActionCreators({ selectCategory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
