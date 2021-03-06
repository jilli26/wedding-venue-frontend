import React from 'react'
import Favorite from './Favorite'
import { connect } from 'react-redux'

class FavoritesList extends React.Component {

  render() {
    let favList
    favList = this.props.favorites.map((fav) => {
      return <Favorite key={fav.id} {...fav}/>
    })
    return (
      <div>
        <h2>Your Favorites</h2>
        <div className="wrapper">
          <div className="cols">
            {favList}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { favorites: state.usersReducer.favorites }
}

export default connect(mapStateToProps)(FavoritesList)
