import React from 'react'
import {Link} from 'react-router-dom'

export default function TicketsList(props) {
  if (!props.tickets) return 'loading'
  return (
    <div>
      <ul>
        { props.tickets && props.tickets.map(ticket => (<div>
          <li key={ticket.id}><Link to={`/tickets/${ticket.id}`}>{ ticket.description }</Link></li>
          <p key={ticket.id}>€ {ticket.price}</p>
          </div>
        )) }
        { !props.tickets && <li>Loading tickets...</li> }
      </ul>
    </div>
  )
}
