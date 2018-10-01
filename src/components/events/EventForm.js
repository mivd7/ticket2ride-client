import * as React from 'react'

export default function EventForm(props) {
  return (
    <form onSubmit={props.onSubmit} onChange={props.onChange}>
      <label>
        Name:
          <input type="text" name="name" values={props.name} />
      </label>
      <label>
        Description:
        <input type="text" name="description" values={props.description} />
      </label>
      <label>
        Date:
        <input type="date" name="date" values={props.date} />
      </label>
      <button type="submit">Add</button>
  </form>)
}
