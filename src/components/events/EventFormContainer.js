import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../../actions/events'
import EventForm from './EventForm'
import './Events.css'

class EventFormContainer extends React.PureComponent {
  state = {
    name: '',
    description: '',
    image: '',
    startdate: '',
    enddate: ''
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
      description: '',
      image: '',
      startdate: '',
      enddate: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    console.log(this.onChange)
    return (<div className="eventForm">
            <h3>Add an event</h3>
              <EventForm onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      values={this.state} />
            </div>)
  }
}

export default connect(null, {createEvent})(EventFormContainer)
