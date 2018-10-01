import * as React from 'react'
import EventForm from './EventForm'

export default function EventDetails(props) {
  if (!props.event) return 'loading'
  return (<div>
          {props.editMode && <EventForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} /> }
          {!props.editMode && <div>
            <h1>{props.event.name}</h1>
            <i>{props.event.date}</i>
            <p>{props.event.description}</p>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onEdit}>Edit</button>
          </div>}
          </div>)
}
