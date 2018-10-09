import React from 'react'
import {loadEvents} from '../../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import EventFormContainer from './EventFormContainer'

class EventsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    console.log(this.props)
    if (this.props.currentUser !== null)
    return (<div>
      <EventsList events={this.props.events} />
      <EventFormContainer />
      </div>)

    return(<EventsList events={this.props.events} />)
  }
}

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)
