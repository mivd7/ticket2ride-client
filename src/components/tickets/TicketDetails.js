import * as React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  if (!props.ticket) return 'loading'
  return (<div>
          {props.editMode && <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} /> }
          {!props.editMode && <div>
            <h1>{props.ticket.description}</h1>
            <h4>€ {props.ticket.price}</h4>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onEdit}>Edit</button>
          </div>}
          </div>)
}
