import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TicketDetails from './TicketDetails'
import Comments from './Comments'
import CommentBoxContainer from './CommentBoxContainer'
import {getTicketsByEvent, loadTicket} from '../../actions/tickets'
import {getCommentsByTicket} from '../../actions/comments'
import {getUser} from '../../actions/users'
import {loadEvent} from '../../actions/events'

// const riskToColors = (risk) => {
//   if(risk < 35) {
//     return 'green';
//   }else if(risk < 65) {
//     return 'yellow';
//   }else {
//     return 'red';
//   }
// }

class TicketDetailsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    if (this.props.ticket === null) return this.props.loadTicket(this.props.match.params.id)
    const ticketUserId = this.props.ticket.map(ticket => ticket.user_id)
    return this.props.getUser(ticketUserId[0])
  }

  render() {
    console.log(this.props)
    if (!this.props.ticket || !this.props.user) return 'Loading ticket details'
    const user = Object.assign({}, this.props.user[0])
    console.log(user)
    return (
      <div>
      <TicketDetails user={user} ticket={this.props.ticket}/>
      <h2>Comments</h2>
      <Comments comments={this.props.comments} />
      <CommentBoxContainer ticketId={this.props.match.params.id} />
      </div>)
  }
}

const mapStateToProps = state => ({
    ticket: state.ticket === null ? null: state.ticket,
    authenticated: state.currentUser !== null,
    user: state.user,
    profiles: state.profile === null ? null : state.profile,
    ticketInfo: state.ticketInfo === null ? null : state.ticketInfo
  })

export default connect(mapStateToProps, {getTicketsByEvent, loadTicket, getUser})(TicketDetailsContainer)
