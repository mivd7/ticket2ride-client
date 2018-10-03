import React from 'react'

export default function Comments(props) {
  console.log(props.comments)
  return (
    <div>
      <ul>
        { props.comments && props.comments.map(comment => (
          <div>
          <p key={comment.id}>{ comment.message } </ p>
          <li key={comment.id}> {comment.time_of_creation} </li>
          </div>
        )) }
        { !props.comments && <li>Loading comments...</li> }
      </ul>
    </div> )
  }
