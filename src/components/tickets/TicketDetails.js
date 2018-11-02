import * as React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  console.log(props)
  if (!props.ticket || props.ticket === null) return 'loading'
  return (
    <div>
        { props.ticket && props.ticket.map(ticket => (<div>
          <h1 key={ticket.id}>{ ticket.description }</h1>
          <h2 key={ticket.id}>€ {ticket.price}</h2>
          <p>A ticket by {props.user.first_name} {props.user.last_name}</p>
          </div>
        )) }
    </div>)
}
