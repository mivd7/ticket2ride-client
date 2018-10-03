import React from 'react'
import {connect} from 'react-redux'
import TicketDetails from './TicketDetails'
import Comments from './Comments'
import CommentBoxContainer from './CommentBoxContainer'
import {loadTicket, updateTicket, deleteTicket} from '../../actions/tickets'
import {getCommentsByTicket} from '../../actions/comments'

class TicketDetailsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.loadTicket(Number(this.props.match.params.id))
    this.props.getCommentsByTicket(Number(this.props.match.params.id))
  }

  render() {
    console.log(this.props.ticket)
    console.log(this.props.comments)
    return(<div>
              <TicketDetails ticket={this.props.ticket}
                             onDelete={this.onDelete}
                             onSubmit={this.onSubmit}
                             onChange={this.onChange}
                             onEdit={this.onEdit}
                             editMode={this.state.editMode}
                             formValues={this.state.formValues} />
              <h3>Comments</h3>
              <Comments comments={this.props.comments} />
              <CommentBoxContainer ticketId={this.props.match.params.id} />
            </div> )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.comments
})

export default connect(mapStateToProps, {loadTicket, updateTicket, deleteTicket, getCommentsByTicket})(TicketDetailsContainer)
