import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../actions/comments'
import CommentBox from './CommentBox'

class CommentBoxContainer extends React.PureComponent {
  state = {
    message: ''
  }

  onChange = (comment) => {
    this.setState({
      [comment.target.name]: comment.target.value
    })
  }

  onSubmit = (comment) => {
    comment.preventDefault()
    this.setState({
      message: ''
    })
    this.props.createComment(this.state, this.props.ticketId)
  }

  render() {
    return (<CommentBox
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createComment})(CommentBoxContainer)
