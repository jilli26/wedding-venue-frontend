import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/user'
import '../styles/login.css'


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
    console.log('hit submit');
    e.preventDefault()
    console.log(this.state);
    this.props.loginUser(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
      <br/><br/>
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {/* <Image src='https://i.imgur.com/41Zf04d.png' /> */}
              {' '}Please Log In
            </Header>
            <Form size='large' onSubmit={this.handleLoginSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleUsernameChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePasswordChange}
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to hitched? <a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return {
   loginUser: (username, password) => {
     dispatch(setCurrentUser(username, password))
   }
 }
}
export default connect(null, mapDispatchToProps)(LoginForm)

//
// class LoginForm extends React.Component {
//
//
//
//   render() {
//     return (
//
//       <div class="wrapper">
//         <div className="container">
//           <form className="form" onSubmit={this.handleLoginSubmit}>
//             <label>
//               Username:
//               <input type="text" name="username" onChange={this.handleUsernameChange}/>
//             </label><br/>
//             <label>
//               Password:
//               <input type="text" name="password" onChange={this.handlePasswordChange}/>
//             </label><br/>
//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//       </div>
//
//
//     )
//   }
// }
