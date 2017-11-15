import React from 'react'
// import '../index.css'
import { deleteFavorite } from '../actions/favorite'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Favorite extends React.Component {

  handleFavoriteDelete = (e) => {
    e.preventDefault()
    const favoriteId = this.props.id
    console.log(favoriteId);
    this.props.deleteFavorite(favoriteId)
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
      <div>
      <br/><h3>{this.props.venue.title}</h3>
        <h4>{this.props.venue.location}</h4>
        <h4>Favorited on {spelledOutDate}</h4>
        <center><button className='button' onClick={this.handleFavoriteDelete}>Delete</button></center>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteFavorite }, dispatch )
}

export default connect(null, mapDispatchToProps)(Favorite)
