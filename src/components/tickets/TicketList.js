import React from 'react'
import {Link} from 'react-router-dom'

export default function TicketsList(props) {
  if (!props.tickets) return 'loading'
  return (
    <div>
      <ul>
        { props.tickets && props.tickets.map(ticket => (
          <li key={ticket.id}><Link to={`/tickets/${ticket.id}`}>{ ticket.description }</Link></li>
        )) }
        { !props.tickets && <li>Loading tickets...</li> }
      </ul>
    </div>
  )
}
