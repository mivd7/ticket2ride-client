import React from 'react'

export default function Comments(props) {
  if (!props.comments) return 'No comments on this ticket yet'
  return (
    <div>
      <ul>
        { props.comments && props.comments.map(comment => (
          <p key={comment.id}>{ comment.message } </ p>
        )) }
        { !props.comments && <li>Loading comments...</li> }
      </ul>
    </div> )
  }
