import React from 'react'
import { connect } from 'react-redux'
import { showVenue } from '../actions/venue'
import { bindActionCreators } from 'redux'
import { addFavorite } from '../actions/favorite'
import Calendar from './Calendar'
import { makeReservation } from '../actions/reservation'
import { setBookingDate } from '../actions/reservation'
// import 'react-icons/lib/ti/heart';
// import '../styles/venue.css'
// import BookingButton from '../components/LargeButton'
import { Button } from 'semantic-ui-react'


import _ from 'lodash'

import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class Venue extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  handleFavorite = (e) => {
    const userId = this.props.userId
    const venueId = e.target.id
    this.props.addFavorite(userId, venueId)
  }

  getBookingDate = (date) => {
    // this.setState({
    //   date
    // })
    this.props.setBookingDate(date)
  }

  handleBooking = (e) => {
    const userId = this.props.userId
    const venueId = e.target.id
    const date = this.props.date

    console.log(date);
    //get the booking date from the store instead
    this.props.makeReservation(userId, venueId, date)
  }

  render() {
    const { contextRef } = this.state

    return (
      <div>
      <br/><br/>
      <div className="wrapper">
        <div className="cols">
        <Grid columns={2}>
          <Grid.Column>
            <div ref={this.handleContextRef}>
              <Segment>
                <div id={this.props.id} onClick={this.handleVenueClick}>
                  <center><img height="340" width="480" src={this.props.venue.photo} alt="wedding-venue"/></center>


                  <h3>About the Venue</h3>

                  <p><img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/></p>

                  <p><img src="https://i.imgur.com/lQoXbdu.png" alt="facebook-icon"/>
                  <img src="https://i.imgur.com/xIbLg78.png" alt="instagram-icon"/>
                  <img src="https://i.imgur.com/XAnzDqO.png" alt="twitter-icon"/>
                  <img src="https://i.imgur.com/TXsRcQv.png" alt="youtube-icon"/></p><hr/>

                  <h4>Description</h4>
                  <p id={this.props.id}>{this.props.venue.description}</p>
                  <div class="box">
                    <div class="box-sm red"></div>
                    <div class="box-sm orange"></div>
                    <div class="box-sm yellow "></div>
                    <div class="box-sm green "></div>
                    <div class="box-sm blue "></div>
                    <div class="box-sm purple"></div>
                  </div>

                  <h4>Facts & Figures</h4>
                  <p id={this.props.id}>{this.props.venue.pricing}</p>
                  <p id={this.props.id}>Maximum {this.props.venue.capacity} guests</p>
                  <p id={this.props.id}>Category: {this.props.venue.category}</p>
                  <p id={this.props.id}>{this.props.venue.size} square feet</p>
                  <hr/>

                  <h4><b>Amenities</b></h4>

                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/> Bridal Suite</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Handicap Accessible</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Liability Insurance</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Handicap Accessible</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Wireless Internet</p>


                  <p id={this.props.id}> {this.props.venue.amenities}</p>
                  <hr/>

                  <h4>Availability</h4>
                  <p id={this.props.id}>{this.props.venue.availability}</p>

                  <h4>Cancellation Policy</h4>
                  <p id={this.props.id}>{this.props.venue.cancellation}</p>

                  <h4>Security Deposit</h4>
                  <p id={this.props.id}>Security Deposit: {this.props.venue.security_deposit}</p>
                  <hr/>

                  <h4>Contact Info</h4>
                  <p>110 Round Hill, New York, NY</p>
                  <p>718-225-2525</p>

                  <hr/>
                  <h4>Reviews</h4>
                  <p></p>

                  <p></p>


                </div><br/>

                {/* <Rail position='left'>
                  {_.times(3, i => <Placeholder key={i} />)}

                  <Sticky context={contextRef}>
                    <Header as='h3'>Stuck Content</Header>
                    <img height="100" width="200" src={this.props.photo} alt="wedding-venue"/>
                  </Sticky>
                </Rail> */}

                <Rail position='right'>
                  <Sticky context={contextRef}>
                    <Header as='h1' id={this.props.id}>{this.props.venue.title}</Header>
                    <h3 id={this.props.id}>{this.props.venue.city}, {this.props.venue.state}</h3>

                    <center><Calendar getBookingDate={this.getBookingDate}/><br/>
                    {/* <button id={this.props.id} onClick={this.handleBooking}>Book</button><br/> */}
                    {/* <BookingButton id={this.props.id} handleBooking={this.handleBooking}/><br/> */}
                    <Button fluid id={this.props.id} onClick={this.handleBooking}>Book</Button><br/>
                    <Button fluid id={this.props.id} ><a href="mailto:jil.krusemann@gmail.com">Contact Vendor</a></Button><br/>
                    <Button fluid id={this.props.id} onClick={this.handleFavorite}>Favorite</Button><br/>
                    {/* <img src="https://i.imgur.com/5ekN9Xr.png" alt="favorite-icon" onClick={this.handleFavorite}/> */}


                    <Button fluid id={this.props.id} onClick={this.handleBooking}>Share</Button><br/>

                    </center>
                    <Image src='/assets/images/wireframe/image.png' />
                  </Sticky>
                </Rail>
              </Segment>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  </div>

    )
  }
}

function mapStateToProps(state, ownProps){
  const id = ownProps.match.params.id
  return {
    userId: state.usersReducer.id,
    date: state.reservationsReducer.date,
    venue: state.venuesReducer.venues[0]
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showVenue, addFavorite, makeReservation, setBookingDate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)




// class Venue extends React.Component {
//
//   // state = {
//   //   date: ''
//   // }
//
//   // handleFavorite = (e) => {
//   //   const userId = this.props.userId
//   //   const venueId = e.target.id
//   //   this.props.addFavorite(userId, venueId)
//   // }
//   //
//   // getBookingDate = (date) => {
//   //   // this.setState({
//   //   //   date
//   //   // })
//   //   this.props.setBookingDate(date)
//   // }
//   //
//   // handleBooking = (e) => {
//   //   const userId = this.props.userId
//   //   const venueId = e.target.id
//   //   const date = this.props.date
//   //
//   //   console.log(date);
//   //   //get the booking date from the store instead
//   //   this.props.makeReservation(userId, venueId, date)
//   // }
//
//   render() {
//
//     return (
      // <div id={this.props.id} onClick={this.handleVenueClick}>
      //   <center><img src={this.props.photo} alt="wedding-venue"/></center>
      //   <h2 id={this.props.id}>{this.props.title}</h2>
      //   <h3 id={this.props.id}>{this.props.location}</h3>
      //
      //
      //   <center><Calendar getBookingDate={this.getBookingDate}/>
      //   <button id={this.props.id} onClick={this.handleBooking}>Book</button><br/>
      //
      //
      //   <button id={this.props.id} onClick={this.handleFavorite}>Favorite</button>
      //
      //   </center>
      //
      //
      //   <p id={this.props.id}>{this.props.description}</p>
      //   <p id={this.props.id}>Pricing: ${this.props.pricing}</p>
      //   <p id={this.props.id}>Capacity: {this.props.capacity} people</p>
      //   <p id={this.props.id}>Amenities: {this.props.amenities}</p>
      //   <p id={this.props.id}>Availability: {this.props.availability}</p>
      //   <p id={this.props.id}>Category: {this.props.category}</p>
      //   <p id={this.props.id}>Size: {this.props.size}</p>
      //   <p id={this.props.id}>Cancellation: {this.props.cancellation}</p>
      //   <p id={this.props.id}>Security Deposit: {this.props.security_deposit}</p>
      //   <p id={this.props.id}>Accessibility: {this.props.accessibility}</p>
      // </div>
//     )
//   }
// }

// function mapStateToProps(state, ownProps){
//
//
//   return {
//     userId: state.usersReducer.id,
//     date: state.reservationsReducer.date,
//
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ showVenue, addFavorite, makeReservation, setBookingDate }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Venue)
