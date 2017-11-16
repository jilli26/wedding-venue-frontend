import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'
import 'react-icons/lib/ti/pin';

const AnyReactComponent = ({ text }) => (

  // const handleVenueClick = () =>  {
  //   console.log('clicked')
  // }

  <i className="material-icons" >place</i>
);

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

let divStyle = {
  border: '2px solid black',
  minWidth: "400px",
  // minHeight: "600px",
  backgroundColor: '#EAFAF1',
  color: 'black',
  fontSize: 11,
  padding: 2,
  cursor: 'pointer',
  fontWeight: 'bold'
  // borderRadius: '10%'
}

const InfoBox = (props) => (
  <div style={divStyle}>
  <h4>{props.venue.title}</h4>
  <p>Category: {props.venue.category}</p>
  <p>Capacity: {props.venue.capacity} guests max</p>
  <p>Pricing: {props.venue.pricing}</p>
  <p>Size: {props.venue.size} sq. ft.</p>
  <img src={props.venue.photo} alt="venue" width="350" position="bottom"/>
  </div>

);

class SimpleMap extends React.Component {
  constructor(){
    super()
    this.childMouseEnter = this.childMouseEnter.bind(this)
    this.childMouseLeave = this.childMouseLeave.bind(this)
    this.state = {
      allVenues: [],
      lat: "",
      lng: "",
      infoBox: false,
      venue: ""
    }
  }

  componentDidMount(){
    // fetch('http://localhost:3000/pets')
    //   .then(res => res.json())
    //   .then(res => this.setState({
    //     allPets: res
    //   }))
  }

  static defaultProps = {
    center: {lat: 40, lng: 40},
    zoom: 11
  };

  childMouseEnter(num, childProps){
    this.setState({
      lat: childProps.lat,
      lng: childProps.lng,
      infoBox: true,
      venue: childProps.venue
    })
  }

  childMouseLeave(num, childProps){
    this.setState({
      infoBox: false
    })
  }

  render() {
    // debugger
    return (
       <GoogleMapReact
        center={{lat: this.props.lat, lng: this.props.lng}}
        defaultZoom={this.props.zoom}
        onChildMouseEnter={this.childMouseEnter}
        onChildMouseLeave={this.childMouseLeave}
      >
      {this.props.venues.map(venue =>
        <AnyReactComponent
          key={venue.id}
          lat={venue.lat}
          lng={venue.lng}
          venue={venue}
        /> )}
        {this.state.infoBox ? <InfoBox lat={this.state.lat} lng={this.state.lng} venue={this.state.venue}/> : null}
      </GoogleMapReact>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.venuesReducer,
    lat: state.searchesReducer.latlng.lat,
    lng: state.searchesReducer.latlng.lng
  }
}

export default connect(mapStateToProps)(SimpleMap)
