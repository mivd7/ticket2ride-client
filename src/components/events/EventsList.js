import React from 'react'
import {Link} from 'react-router-dom'
import EventFormContainer from './EventFormContainer'

export default function EventsList(props) {
  return (
    <div>
      <ul>
        { props.events && props.events.map(event => (
          <li key={event.id}><Link to={`/events/${event.id}`}>{ event.name }</Link></li>
        )) }
        { !props.events && <li>Loading events...</li> }
      </ul>

      <EventFormContainer />
    </div>
  )
}
