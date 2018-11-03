import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Comments from './Comments'
import {loadComments} from '../../actions/comments'

class CommentsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    this.props.loadComments(this.props.ticketId)
   }

  render() {
    console.log(this.props)
    if (!this.props.ticket) return 'loading tickets'
    if (!this.props.comments) return 'loading comments'
    return (<div>
      <h2>Comments</h2>
      <Comments comments={this.props.comments} />
      </div>)
  }
}

const mapStateToProps = state => ({
    comments: state.comments,
    ticket: state.ticket === null ? null: state.ticket
  })

export default connect(mapStateToProps, {loadComments})(CommentsContainer)
