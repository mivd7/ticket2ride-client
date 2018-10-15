import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TicketDetails from './TicketDetails'
import Comments from './Comments'
import CommentBoxContainer from './CommentBoxContainer'
import {loadTicket, updateTicket, deleteTicket} from '../../actions/tickets'
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
  // state = {
  //   editMode: false
  // }

  componentDidMount() {
    this.props.loadTicket(this.props.match.params.id)
    console.log(this.props.match.params.id)
    const ticketId = Number(this.props.match.params.id)
    console.log(ticketId)
    const currentTicket = this.props.ticketData
    function findUserByTicketId(id) {
          var i;
          for (i = 0; i < currentTicket.length; i++) {
            if (currentTicket[i]['id'] === id)
              return currentTicket[i]['user_id']
          }
        }
    const user = findUserByTicketId(ticketId)
    function findEventByTicketId(id) {
          var i;
          for (i = 0; i < currentTicket.length; i++) {
            if (currentTicket[i]['id'] === id)
              return currentTicket[i]['event_id']
          }
        }
    const event = findEventByTicketId(ticketId)
    console.log(event)
    console.log(user)
    this.props.getUser(user)
    this.props.loadEvent(event)
    this.props.getCommentsByTicket(Number(this.props.match.params.id))
  }

  render() {
    console.log(this.props)
    const ticketId = Number(this.props.match.params.id)
    if (this.props.currentUser !== null)
      return(<div>
              <h1>A ticket by {this.props.user.firstName} {this.props.user.lastName} for {this.props.event.name}</h1>
              <h2>Comments</h2>
              <Comments comments={this.props.comments} />
              <CommentBoxContainer ticketId={this.props.match.params.id} />
            </div> )
      return (<div>
                  <TicketDetails ticket={this.props.ticketData}
                               onDelete={this.onDelete}
                               onSubmit={this.onSubmit}
                               onChange={this.onChange}
                               onEdit={this.onEdit}
                               editMode={this.state.editMode}
                               formValues={this.state.formValues}

                            />
                <p> Interested in this ticket and a Uber-ride 2 the venue?
                <br />
                <Link to={`/sign up`}>Sign up</Link> and <Link to={'/login'}>login</Link> to get your Ticket 2 Ride today!</p>
                  </div>)
  }
}

const mapStateToProps = state => ({
  ticketData: state.tickets.tickets,
  comments: state.comments,
  user: state.users,
  event: state.event,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadTicket, getCommentsByTicket, getUser, loadEvent})(TicketDetailsContainer)
