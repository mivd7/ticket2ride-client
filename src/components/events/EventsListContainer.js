import React from 'react'
import {loadEvents} from '../../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'

class EventsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <EventsList events={this.props.events} />
  )}
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)
