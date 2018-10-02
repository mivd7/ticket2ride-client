import React from 'react'
import {getTicketsByEvent} from '../../actions/tickets'
import {connect} from 'react-redux'
import TicketList from './TicketList'

class TicketsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getTicketsByEvent(1)
  }

  render() {
    console.log(this.props.tickets)
    // console.log(Number(this.props.match.params.id))
    return (
        <div>
           <h1>Available Tickets</h1>
           <TicketList tickets={this.props.tickets} />
        </div>
  )}
}

const mapStateToProps = state => ({
  tickets: state.tickets
})

export default connect(mapStateToProps, {getTicketsByEvent})(TicketsListContainer)
