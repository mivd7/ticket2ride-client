import * as React from 'react'

export default function CommentBox(props) {
  return (
      <div>
        <form onSubmit={props.onSubmit} onChange={props.onChange} >
          <h3>Add a comment:
          <br />
            <textarea type="text" name="message" value={props.message} />
          </h3>
          <button type="submit">Add Comment</button>
        </form>
      </div>)
}
