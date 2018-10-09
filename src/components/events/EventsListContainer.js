import React from 'react'
import {loadEvents} from '../../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import {userId} from '../../auth/jwt'
import TopBar from '../../auth/topbar'

class EventsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    if (this.props.currentUser === null)
    return (<EventsList events={this.props.events} />)
    return (<div>
      <TopBar />
      <EventsList events={this.props.events} />
      </div>
  )}
}

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)
