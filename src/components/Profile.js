import React from 'react'
import { connect } from 'react-redux'
import FavoritesList from '../containers/FavoritesList'
import { fetchProfileData } from '../actions/user'
import { bindActionCreators } from 'redux'
import ReservationsList from '../containers/ReservationsList'

class Profile extends React.Component {

  componentDidMount = () => {
    //fetch all info about a user whenever the profile page loads - need this for favs and rezzies
    const user = this.props.user
    this.props.fetchProfileData(user)
  }

  render() {
    return (
      <div>
        <h2>Hey there, {this.props.user.username}!</h2><br/>
        <FavoritesList/><br/>
        <ReservationsList/><br/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.usersReducer,
    favorites: state.usersReducer.favorites
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchProfileData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
