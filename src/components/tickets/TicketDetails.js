import * as React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  console.log(props)
  if (!props.ticketData || props.ticket === null) return 'loading'
  return (<div>
          {props.editMode && <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} /> }
          {!props.editMode && <div>
            <h1>{props.ticketData.description}</h1>
            <h4>€ {props.ticketData.price}</h4>
          </div>}
          </div>)
}
