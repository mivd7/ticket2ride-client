import * as React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  if (!props.ticket) return 'loading ticket'
  if (!props.profile) return 'loading profile'
  const ticketProfile = props.profile[0]

  return (
    <div>
        { props.ticket && ticketProfile && props.ticket.map(ticket => (<div>
          <h1>{ ticket.description }</h1>
          <h2>€ {ticket.price}</h2>
          <p>A ticket by {ticketProfile.user_name} </p>
          </div>
        )) }
        {!props.ticket && !ticketProfile && <p>Error loading ticket</p>}
    </div>)
}
