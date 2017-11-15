import React from 'react'
import { connect } from 'react-redux'
import FavoritesList from '../containers/FavoritesList'
import { fetchProfileData } from '../actions/user'
import { bindActionCreators } from 'redux'
import ReservationsList from '../containers/ReservationsList'
import '../styles/profile.css'

class Profile extends React.Component {

  componentDidMount = () => {
    const user = this.props.user
    this.props.fetchProfileData(user)
  }

  render() {
    return (
      <div >
        <br/><br/>
        <h1>Hey there, {this.props.user.username}!</h1>
        <p>129 days until your wedding!</p>
        <ReservationsList/><br/>
        <FavoritesList/><br/>
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
