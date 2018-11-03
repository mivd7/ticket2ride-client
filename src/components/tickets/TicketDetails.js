import * as React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  console.log(props)
  console.log(ticketProfile)
  if (!props.ticket) return 'loading ticket'
  if (!props.profile) return 'loading profile'
  const ticketProfile = Object.assign({}, props.profile[0])

  return (
    <div>
        { props.ticket && ticketProfile && props.ticket.map(ticket => (<div>
          <h1 key={ticket.id}>{ ticket.description }</h1>
          <h2 key={ticket.id}>€ {ticket.price}</h2>
          <p>A ticket by {ticketProfile.user_name}</p>
          </div>
        )) }
        {!props.ticket && !ticketProfile && <p>error loading ticket</p>}
    </div>)
}
