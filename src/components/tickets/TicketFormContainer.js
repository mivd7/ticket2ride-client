import React from 'react'
import {connect} from 'react-redux'
import {createTicket} from '../../actions/tickets'
import TicketForm from './TicketForm'

class TicketFormContainer extends React.PureComponent {
  state = {
    description: '',
    price: '',
    thumbnail: ''
  }

  onChange = (ticket) => {
    this.setState({
      [ticket.target.name]: ticket.target.value
    })
  }

  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      description: '',
      price: '',
      thumbnail: ''
    })
    this.props.createTicket(this.state, this.props.eventId)
  }

  render() {
    return (<TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createTicket})(TicketFormContainer)
