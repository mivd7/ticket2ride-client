import React from 'react'
import {getTicketsByEvent} from '../../actions/tickets'
import {connect} from 'react-redux'
import TicketList from './TicketList'
// import {Link} from 'react-router-dom'

// const riskToColors = (risk) => {
//   if(risk < 35) {
//     return 'green';
//   }else if(risk < 65) {
//     return 'yellow';
//   }else {
//     return 'red';
//   }
// }

class TicketsListContainer extends React.PureComponent {
  componentDidMount () {
    this.props.getTicketsByEvent(this.props.eventId)
  }

  render() {
  console.log(this.props)
  return (
      <div>
         <h1>Available Tickets</h1>
         <TicketList tickets={this.props.tickets} eventId={this.props.eventId} />
      </div>
    )}
}

const mapStateToProps =( state ) => ({
  tickets: state.tickets === null ? null : Object.values(state.tickets),
  profiles: state.profile === null ? null : state.profile,
  // ticketsInfo: state.ticketInfo === null ? null : state.ticketInfo
})

export default connect(mapStateToProps, {getTicketsByEvent})(TicketsListContainer)
