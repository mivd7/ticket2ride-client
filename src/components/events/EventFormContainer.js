import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../../actions/events'
import EventForm from './EventForm'

class EventFormContainer extends React.PureComponent {
  state = {
    name: '',
    date: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      date: '',
      description: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    return (<EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createEvent})(EventFormContainer)
