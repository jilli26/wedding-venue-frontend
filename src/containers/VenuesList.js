import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Venue from './Venue.js'
import { showVenue } from '../actions/venue'
import '../styles/card.css'
import HomePageImage from '../components/HomePageImage'
import SimpleMap from '../components/MyMapComponent'
import Dropdown from '../components/Dropdown'
import 'react-select/dist/react-select.css';
import SearchResults from '../containers/SearchResults'
import CapacitySelector from '../components/CapacitySelector'
import SiteTitle from '../components/SiteTitle'


class VenuesList extends React.Component {

  handleVenueClick = (event) => {
    const id = event.target.id
    this.props.showVenue(id)
  }

  render() {

    return (

      <div>
        <br/><br/><br/>
        {/* <img src="https://i.imgur.com/41Zf04d.png" alt="hitched-logo"/> */}
        <div className="dropdown">
          {this.props.venues.length === 1 || this.props.showMap === false ? null : <div><Dropdown/><CapacitySelector/><br/><br/></div>}
        </div>

        {/* <div className="dropdown">
          {this.props.showMap === false ? null : <div><h3>Capacity</h3><CapacitySelector/></div>}
        </div> */}

      <div className="wrapper">
        <div className="cols">
          {this.props.venues.length === 1 ? <Venue {...this.props.venues[0]}/> : null}
          {this.props.selectedVenues === undefined || this.props.venues.length === 1 ? null : <SearchResults/>}
        </div>

      <center>
        <div style={{width: '60vw', height: '60vh'}}>

        {this.props.showMap === false ? null : <SimpleMap />}
        {/* {this.props.venues.length === 1 ? null : null} */}

      </div>
      </center>
    </div>
    </div>

    )
  }
}


function mapStateToProps(state){
  return {
    ...state.venuesReducer,
    showMap: state.searchesReducer.showMap,
    latLng: state.searchesReducer.latLng,
    selectedVenues: state.searchesReducer.finalSelection
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showVenue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VenuesList)
