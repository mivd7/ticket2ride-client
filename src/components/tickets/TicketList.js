import React from 'react'
import {Link} from 'react-router-dom'

export default function TicketsList(props) {
  console.log(props)
  if (!props.ticketData) return 'loading'
  return (
    <div>
      <ul>
        { props.ticketData.tickets && props.ticketData.tickets.map(ticket => (<div>
          <li key={ticket.id}><Link to={`/events/${props.eventId}/tickets/${ticket.id}`}>{ ticket.description }</Link></li>
          <p key={ticket.id}>€ {ticket.price}</p>
          </div>
        )) }
      </ul>
    </div>)
}
