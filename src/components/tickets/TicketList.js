import React from 'react'
import {Link} from 'react-router-dom'

export default function TicketsList(props) {
  console.log(props)
  if (!props.tickets) return 'loading'
  return (
    <div>
      <ul>
        { props.tickets && props.tickets.map(ticket => (<div>
          <li ><Link to={`/events/${props.eventId}/tickets/${ticket.id}`}>{ ticket.description }</Link></li>
          <p >€ {ticket.price}</p>
          </div>
        )) }
      </ul>
    </div>)
}
