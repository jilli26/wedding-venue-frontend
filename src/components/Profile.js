import React from 'react'
import { connect } from 'react-redux'
import FavoritesList from '../containers/FavoritesList'
import { fetchProfileData } from '../actions/user'
import { bindActionCreators } from 'redux'
import ReservationsList from '../containers/ReservationsList'
import '../styles/profile.css'
import '../styles/profilehoverparallax.css'
import { Image } from 'semantic-ui-react'

class Profile extends React.Component {

  componentDidMount = () => {
    const user = this.props.user
    this.props.fetchProfileData(user)
  }

  render() {
    return (
      /* <div>
        <br/><br/>
        <div class="card">
          <img src="/w3images/team2.jpg" alt="profile-pic"/>
          <h1>Liliah Vanderhoff</h1>
          <p class="title">129 days until your wedding!</p>
          <p>Test test</p>
          <div style={{margin: "24px 0"}}>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
         </div>

         </div>
       </div> */
       <div><br/><br/><br/><br/>
       <center><Image src='https://i.imgur.com/f2A2Lrd.jpg' size='medium' circular /></center>
          <h1 className='cursive'>Hey there, {this.props.user.username}!</h1>
          <h3 ><italic>129 days until your wedding!</italic></h3><br/>

          {/* <div className="wrapper"> */}
            {/* <div className="cols"> */}
              <ReservationsList/><br/>
              <FavoritesList/><br/>
            {/* </div> */}
        {/* </div> */}
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
