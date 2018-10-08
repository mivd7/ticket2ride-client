import React from 'react'
import {Link} from 'react-router-dom'
import EventFormContainer from './EventFormContainer'
import './EventsList.css'

export default function EventsList(props) {
  return (
    <div className="eventsList">
      <h1> Upcoming Events </h1>
      <ul>
        { props.events && props.events.map(event => (
          <li key={event.id}><Link to={`/events/${event.id}`} >{ event.name }</Link></li>
        )) }
        { !props.events && <li>Loading events...</li> }
      </ul>

      <EventFormContainer />
    </div>
  )
}
