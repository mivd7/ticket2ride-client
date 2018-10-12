import React from 'react'
import {Link} from 'react-router-dom'
// import EventFormContainer from './EventFormContainer'
import './Events.css'

export default function EventsList(props) {
  return (
    <div className="eventBody" >
      <h1> Upcoming Events </h1>
      <ul>
        { props.events && props.events.map(event => (<div>
          <h2 key={event.id}>{ event.name }</h2>
          <p key={event.id}>{event.description}
          <br />
          Date: {event.startdate}</p>
          <p><Link to={`/events/${event.id}`}> Buy and sell tickets for {event.name} !</Link></p>
          </div>
        )) }
        { !props.events && <li>Loading events...</li> }
      </ul>
    </div>
  )
}
