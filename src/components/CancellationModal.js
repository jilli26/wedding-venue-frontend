import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class CancellationModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state
    return (
      <div>
        <center>

        <Button onClick={this.show('tiny')}>Cancel</Button>
        </center>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Cancel Your Reservation
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to cancel your reservation?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.props.handleDelete}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CancellationModal
