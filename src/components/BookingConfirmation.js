import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BookingConfirmation extends Component {
  state = {
    open: false
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  confirmBooking = () => this.setState({ open: false }, () => {
    const venueId = this.props.venueId
    this.props.handleBooking(venueId)
  })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    const cancelMessage = "A quick reminder about the venue's cancellation policy: "

    var options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const date = this.props.date
    const newDate = new Date(date)

    const finalDate = newDate.toLocaleTimeString("en-us", options)

    const spelledOutDate = (finalDate.split(' ').slice(0,4).toString()).replace(/[, ]+/g, " ").trim()

    // debugger
    return (
      <div>

        <Button size="big" onClick={this.show('inverted')}>Book</Button><br/>


        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Just confirming your booking!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <center>
              <h2>{this.props.title}</h2>
              <h3>{this.props.city}, {this.props.state}</h3>
              <h3>{spelledOutDate}</h3>
              <h3>{this.props.cancellationPolicy ? this.props.cancellationPolicy : null}</h3>
              </center>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Not now
            </Button>
            <Button positive icon='checkmark' labelPosition='right' id={this.props.id} content="Let's do this!" onClick={this.confirmBooking} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let venueId
  if (state.venuesReducer.venues.length > 0) {
    venueId = state.venuesReducer.venues[0].id
  } else {
    venueId = null
  }
  return {
    reservation: state.reservationsReducer.reservations[0],
    userId: state.usersReducer.id,
    venueId: venueId
  }
}

export default withRouter(connect(mapStateToProps)(BookingConfirmation))
