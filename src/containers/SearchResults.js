import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showVenue } from '../actions/venue'
import { Link  } from 'react-router-dom'


class SearchResults extends React.Component {

  handleVenueClick = (event) => {
    const id = event.target.id
    this.props.showVenue(id)
  }

  render() {
    let allSelectedVenues

    allSelectedVenues = this.props.selectedVenues.map(v => {
      return (
        <div className="col" id={v.id} ontouchstart="this.classList.toggle('hover')">
          <Link to={`venues/${v.id}`}>
          <div className="container" id={v.id} onClick={this.handleVenueClick}>
            <div className="front" id={v.id} >
              <div className="inner" id={v.id} >
                <p id={v.id} >{v.title}</p>
                <span id={v.id} >{v.location}</span>
              </div>
            </div>
            <div className="back" id={v.id} >
              <div className="inner" id={v.id} >
                <p id={v.id} >Pricing: ${v.pricing}</p>
                <p id={v.id} >Capacity: {v.capacity} people</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      )
    })

    return (
      <div className="wrapper">
        <div className="cols">
          {allSelectedVenues}
        </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedVenues: state.searchesReducer.finalSelection
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showVenue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
