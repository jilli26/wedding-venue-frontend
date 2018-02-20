import React from 'react'
import { connect } from 'react-redux'
import { showVenue } from '../actions/venue'
import { bindActionCreators } from 'redux'
import { addFavorite } from '../actions/favorite'
import Calendar from './Calendar'
import { makeReservation } from '../actions/reservation'
import { setBookingDate } from '../actions/reservation'
import '../styles/venue.css'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import BookingConfirmation from '../components/BookingConfirmation'
import _ from 'lodash'

import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class Venue extends React.Component {
  state = {}

  componentWillMount = () => {
    if (!this.props.venue) {
      const id = this.props.match.params.id
      this.props.showVenue(id)
    }
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleFavorite = (e) => {
    const userId = this.props.userId
    const venueId = e.target.id
    this.props.addFavorite(userId, venueId)
    this.props.history.push('/profile')
  }

  getBookingDate = (date) => {
    this.props.setBookingDate(date)
  }

  handleBooking = (id) => {
    const userId = this.props.userId
    const venueId = id
    const date = this.props.date
    this.props.makeReservation(userId, venueId, date)
    this.props.history.push('/profile')
  }

  render() {
    const { contextRef } = this.state

    return (
      <div>

      <br/><br/>
      {/* <div className="wrapper"> */}
      <img height="340" id="venuePageImage" width="100%" height="900px" src={this.props.venue.photo} alt="wedding-venue"/>
        <div className="cols" style={{width: "100%"}}>
        <Grid columns={2}>
          <Grid.Column>
            <div className="venue-box" ref={this.handleContextRef} style={{width: "100%", marginLeft: '200px', marginTop: '30px'}}>
              <Segment>
                <div id={this.props.venue.id} onClick={this.handleVenueClick}>
                  {/* <center><img height="340" width="480" src={this.props.venue.photo} alt="wedding-venue"/></center> */}


                  <h3>About the Venue</h3>

                  <p><img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/>
                  <img src="https://i.imgur.com/Z19cBaD.png" alt="ring-rating-icon"/> ({this.props.venue.ratings} ratings)</p>

                  <p><img src="https://i.imgur.com/lQoXbdu.png" alt="facebook-icon"/>
                  <img src="https://i.imgur.com/xIbLg78.png" alt="instagram-icon"/>
                  <img src="https://i.imgur.com/XAnzDqO.png" alt="twitter-icon"/>
                  <img src="https://i.imgur.com/TXsRcQv.png" alt="youtube-icon"/></p>

                  <center><h3><a href="mailto:test@test.com">Contact Vendor</a></h3><br/></center>
                  <center><h3><a href="mailto:test@test.com">Share</a></h3></center>

                  <hr/>

                  <h4>Description</h4>
                  <p id={this.props.venue.id}>{this.props.venue.description}</p>

                  <h4>Facts & Figures</h4>
                  <p id={this.props.venue.id}>{this.props.venue.pricing}</p>
                  <p id={this.props.venue.id}>Maximum {this.props.venue.capacity} guests</p>
                  <p id={this.props.venue.id}>Category: {this.props.venue.category}</p>
                  <p id={this.props.venue.id}>{this.props.venue.size} square feet</p>
                  <hr/>

                  <h4><b>Amenities</b></h4>

                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/> Bridal Suite</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Handicap Accessible</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Liability Insurance</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Handicap Accessible</p>
                    <p> <img src="https://i.imgur.com/RdAFk9u.png"/>Wireless Internet</p>


                  <p id={this.props.venue.id}> {this.props.venue.amenities}</p>
                  <hr/>

                  <h4>Availability</h4>
                  <p id={this.props.venue.id}>{this.props.venue.availability}</p>

                  <h4>Cancellation Policy</h4>
                  <p id={this.props.venue.id}>{this.props.venue.cancellation}</p>

                  <h4>Security Deposit</h4>
                  <p id={this.props.venue.id}>{this.props.venue.security_deposit}</p>
                  <hr/>

                  <h4>Contact Info</h4>
                  <p>{this.props.venue.address}</p>
                  <p>{this.props.venue.phone}</p>

                  {/* <hr/>
                  <h4>Reviews</h4> */}
                  {/* <p></p> */}

                  <p></p>


                </div><br/>

                {/* <Rail position='left'>
                  {_.times(3, i => <Placeholder key={i} />)}

                  <Sticky context={contextRef}>
                    <Header as='h3'>Stuck Content</Header>
                    <img height="100" width="200" src={this.props. photo} alt="wedding-venue"/>
                  </Sticky>
                </Rail> */}

                <Rail position='right' style={{width: "40%"}}>
                  <Sticky context={contextRef} style={{backgroundColor: '#EAFAF1', width: '300px'}}>
                    <br/><br/>
                    <Header as='h1' id={this.props.venue.id}>{this.props.venue.title}</Header>
                    <h3 id={this.props.venue.id}>{this.props.venue.city}, {this.props.venue.state}</h3>

                    <center><Calendar getBookingDate={this.getBookingDate}/><br/>

                    <BookingConfirmation id={this.props.venue.id} title={this.props.venue.title} city={this.props.venue.city} state={this.props.venue.state} cancel={this.props.venue.cancellation} date={this.props.date} handleBooking={this.handleBooking}/>

                    {/* <Button fluid color='gray' id={this.props.venue.id} onClick={this.handleBooking}>Book</Button><br/> */}

                    <br/><Button size="big" color='gray' id={this.props.venue.id} onClick={this.handleFavorite}>   Favorite   </Button>

                    <br/><br/><br/>

                    </center>

                  </Sticky>
                </Rail>
              </Segment>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  // </div>

    )
  }
}

Venue.defaultProps = {
  venue: {}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Venue))
