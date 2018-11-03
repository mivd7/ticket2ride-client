import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TicketDetails from './TicketDetails'
import Comments from './Comments'
import CommentBoxContainer from './CommentBoxContainer'
import {loadTicket, loadProfile} from '../../actions/tickets'
import {getCommentsByTicket} from '../../actions/comments'

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
    this.props.loadTicket(this.props.match.params.id)
   }

  render() {
    console.log(this.props)
    if (!this.props.ticket) return 'loading tickets'
    return (
      <div>
      <TicketDetails profile={this.props.profile} ticket={this.props.ticket} />
      <h2>Comments</h2>
      <Comments comments={this.props.comments} />
      <CommentBoxContainer ticketId={this.props.match.params.id} />
      </div>)
  }
}

const mapStateToProps = state => ({
    ticket: state.ticket,
    authenticated: state.currentUser !== null,
    user: state.user,
    profile: state.profile === null ? null: state.profile,
    ticketInfo: state.ticketInfo === null ? null : state.ticketInfo
  })

export default connect(mapStateToProps, {loadTicket})(TicketDetailsContainer)
