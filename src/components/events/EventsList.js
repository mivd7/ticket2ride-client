import React from 'react'
import {Link} from 'react-router-dom'
import EventFormContainer from './EventFormContainer'
import './EventsList.css'

export default function EventsList(props) {
  return (
    <div className="eventsList">
      <h1> Upcoming Events </h1>
      <ul>
        { props.events && props.events.map(event => (<div>
          <h2 key={event.id}>{ event.name }</h2>
          <p key={event.id}>{event.description}
          <br />
          on: {event.startdate}</p>
          <li key={event.id}><Link to={`/events/${event.id}`}> Buy and sell tickets for {event.name} !</Link></li>
          </div>
        )) }
        { !props.events && <li>Loading events...</li> }
      </ul>

      <EventFormContainer />
    </div>
  )
}
