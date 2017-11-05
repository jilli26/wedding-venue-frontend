import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'
// import login from '../styles/login.css'

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.loginUser(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleUsernameChange}/>
          </label><br/>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handlePasswordChange}/>
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return {
   loginUser: (username, password) => {
     dispatch(loginUser(username, password))
   }
 }
}
export default connect(null, mapDispatchToProps)(LoginForm)


// export default LoginForm
