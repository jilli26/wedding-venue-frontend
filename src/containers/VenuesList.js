import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Venue from './Venue.js'
import { showVenue } from '../actions/venue'
import '../styles/card.css'
import HomePageImage from '../components/HomePageImage'
// import { Route, NavLink, Switch } from 'react-router-dom'
// import SearchForm from '../components/SearchForm'
// import SimpleForm from '../components/SimpleForm'
import SimpleMap from '../components/MyMapComponent'
// import PlacesAutoCompleteForm from '../components/PlacesAutoCompleteForm'
import Dropdown from '../components/Dropdown'
import 'react-select/dist/react-select.css';
// import { setSearchLocation } from '../actions/search'
import SearchResults from '../containers/SearchResults'
import CapacitySelector from '../components/CapacitySelector'
// import { Route } from 'react-router-dom'
// import Loading from '../containers/Loading'
import SiteDescription from '../components/SiteDescription'
import SiteTitle from '../components/SiteTitle'


class VenuesList extends React.Component {

  handleVenueClick = (event) => {
    const id = event.target.id
    this.props.showVenue(id)
  }

  // searchLocation = (latlng) => {
  //   this.props.setSearchLocation(latlng)
  // }

  // static showHomePageImage = () => {
  //   if (this.props.venues.length === 1) {
  //     return null
  //   } elseif (this.props.length > 1 && this.props.showMap === false) {
  //     return <HomePageImage/>
  //   } elseif (this.props.length > 1 && this.props.showMap === true) {
  //     return null
  //   }
  // }


  // showHomePageImage = () => {
  //   switch (true) {
  //     case this.props.venues.length > 1:
  //       return (<HomePageImage/>)
  //     case this.props.venues.length === 1:
  //       return null
  //     case this.props.venues.length > 1 && this.props.showMap === true:
  //       return null
  //     default:
  //       return null
  //   }
  // }


  render() {


    // const imgUrl = 'https://i.imgur.com/ioooeVy.jpg'
    // style={{backgroundImage: `url(${imgUrl})`}}
    // style={{ backgroundImage: `url(${imageUrl})` }}

    // let listVenues = this.props.venues.map(venue => {
    //   return (
    //           <div className="col" id={venue.id} ontouchstart="this.classList.toggle('hover');">
    //             <div className="container" id={venue.id} onClick={this.handleVenueClick}>
    //               <div className="front" id={venue.id} >
    //                 <div className="inner" id={venue.id} >
    //                   <p id={venue.id} >{venue.title}</p>
    //                   <span id={venue.id} >{venue.location}</span>
    //                 </div>
    //               </div>
    //               <div className="back" id={venue.id} >
    //                 <div className="inner" id={venue.id} >
    //                   <p id={venue.id} >Pricing: ${venue.pricing}</p>
    //                   <p id={venue.id} >Capacity: {venue.capacity} people</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //   )
    // })

    return (
      <div><br/>

      {this.props.venues.length === 1 ? null : <HomePageImage/>}
      {/* {this.props.venues.length === 1 ? null : <SiteTitle/>} */}
      <SiteDescription/>
      {/* <ImageCarousel/> */}

      <center>

        {/* <div>
          {this.props.venues.length === 1 ? null : <SimpleForm searchLocation={this.searchLocation}/>}
        </div> */}

        {/* filter   */}
        <div className="dropdown">
          {this.props.venues.length === 1 || this.props.showMap === false ? null : <div><Dropdown/><CapacitySelector/><br/><br/></div>}
        </div>

        {/* <div className="dropdown">
          {this.props.showMap === false ? null : <div><h3>Capacity</h3><CapacitySelector/></div>}
        </div> */}


      </center>

      <div className="wrapper">
        <div className="cols">
          {this.props.venues.length === 1 ? <Venue {...this.props.venues[0]}/> : null}
          {this.props.selectedVenues === undefined || this.props.venues.length === 1 ? null : <SearchResults/>}
        </div>

      <center>
        <div style={{width: '60vw', height: '40vh'}}>

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
