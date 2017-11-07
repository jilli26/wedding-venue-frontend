import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../styles/datepicker.css'
import '../styles/reactdatepickercssmodules.css'

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    }, () => {
      this.props.getBookingDate(this.state.startDate._d)
    })
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

export default Calendar

//use this to change date format to Tuesday, November 21, 2017 12:48 pm
//this.state.startDate.format('LLLL') - need to get rid of time digits
