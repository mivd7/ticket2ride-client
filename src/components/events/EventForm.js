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
        Image(URL):
        <input type="text" name="image" values={props.image} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startdate" values={props.startdate} />
      </label>
      <label>
        End Date:
        <input type="date" name="enddate" values={props.enddate} />
      </label>
      <button type="submit">Add</button>
  </form>)
}
