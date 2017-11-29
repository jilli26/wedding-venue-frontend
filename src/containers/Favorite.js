import React from 'react'
import { deleteFavorite } from '../actions/favorite'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../styles/profilehoverparallax.css'
import '../styles/profile.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { showVenue } from '../actions/venue'

class Favorite extends React.Component {

  handleFavoriteDelete = (e) => {
    e.preventDefault()
    const favoriteId = this.props.id
    console.log(favoriteId);
    this.props.deleteFavorite(favoriteId)
  }

  handleShowVenue = (e) => {
    e.preventDefault()
    const venueId = this.props.venueId
    this.props.showVenue(venueId)
    this.props.history.push(`/venues/${venueId}`)
  }

  render() {

    const date = this.props.created_at
    const newDate = new Date(date)

    var options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const finalDate = newDate.toLocaleTimeString("en-us", options)

    const spelledOutDate = (finalDate.split(' ').slice(0,4).toString()).replace(/[, ]+/g, " ").trim()

    return (
      <div className="col" ontouchstart="this.classList.toggle('hover')">
        <div className="reservation">
          <Link to={`venues/${this.props.venueId}`} onClick={this.handleShowVenue}><h3>{this.props.venue.title}</h3></Link>
          <h4>{this.props.venue.city}, {this.props.venue.state}</h4>
          <p>Favorited on {spelledOutDate}</p>
          <Button className='button' onClick={this.handleFavoriteDelete}>Delete</Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const favoriteId = ownProps.id
  let venueId = null
  if (favoriteId) {
    venueId = state.usersReducer.favorites.find(fav => fav.id === favoriteId).venue_id
  }
  return {
    venueId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteFavorite, showVenue }, dispatch )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorite))
