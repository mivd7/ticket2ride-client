import * as React from 'react'

export default function TicketForm(props) {
  return (
    <form onSubmit={props.onSubmit} onChange={props.onChange}>
      <label>
        Message:
        <input type="text" name="message" values={props.message} />
      </label>
      <button type="submit">Add Comment</button>
   </form> )
}
