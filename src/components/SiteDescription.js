import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../styles/sitedescription.css'

class SiteDescription extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br/>
          <h1>WHAT IS HITCHED?</h1>
          <br/>
        </center>
        <Grid columns={4}>
          <Grid.Column>
            <center><img src='https://i.imgur.com/evNrlli.png'/></center>
            <h3> NO WORRIES </h3>
            <p>You're engaged! Congrats. We know you've got your hands full, so we're here to help make things a little simpler. Relax, have a marg.</p>
          </Grid.Column>
          <Grid.Column>
            <center><img src='https://i.imgur.com/E26pht7.png'/></center>
            <h3> FIND YOUR WEDDING SPOT </h3>
            <p>Hitched is a digital platform connecting wedding venue seekers and those with picturesque places to rent out. With spaces from castles and gardens to wineries and hotels, we're the one-stop shop for all your wedding venue needs. </p>
          </Grid.Column>
          <Grid.Column>
            <center><img src='https://i.imgur.com/cPClrXs.png'/></center>
            <h3> RENT YOUR SPACES </h3>
            <p>Manage an art gallery? Have your own restaurant? Earn some extra dollars by listing your space for couples' special days.</p>
          </Grid.Column>
          <Grid.Column>
            <center><img src='https://i.imgur.com/jS2LSVQ.png'/></center>
            <h3> LOCAL AND GLOBAL </h3>
            <p>Find spots to tie the knot that you haven't yet heard of yet -- locally, and globally.</p>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default SiteDescription
