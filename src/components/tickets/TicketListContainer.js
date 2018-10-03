import React from 'react'
import {getTicketsByEvent} from '../../actions/tickets'
import {connect} from 'react-redux'
import TicketList from './TicketList'

class TicketsListContainer extends React.PureComponent {
  render() {
    console.log(this.props.eventId)
    console.log(this.props.tickets)
    return (
        <div>
           <h1>Available Tickets</h1>
           <TicketList tickets={this.props.tickets} eventId={this.props.eventId} />
        </div>
  )}
}

const mapStateToProps = state => ({
  tickets: state.tickets
})

export default connect(mapStateToProps, {getTicketsByEvent})(TicketsListContainer)
