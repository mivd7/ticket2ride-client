import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TicketDetails from './TicketDetails'
import Comments from './Comments'
import CommentBoxContainer from './CommentBoxContainer'
import {loadTicket, updateTicket, deleteTicket} from '../../actions/tickets'
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

    this.props.loadTicket(Number(this.props.match.params.id))
    this.props.getCommentsByTicket(Number(this.props.match.params.id))

  }

  render() {
    console.log(this.props.ticket)
    // const userTicket = this.props.ticket.map(ticket => ticket.user_id)
    // console.log(userTicket)
    if (this.props.currentUser !== null)
      return(<div>
              <TicketDetails ticket={this.props.ticket}
                             onDelete={this.onDelete}
                             onSubmit={this.onSubmit}
                             onChange={this.onChange}
                             onEdit={this.onEdit}
                             editMode={this.state.editMode}
                             formValues={this.state.formValues} />
              <h2>Comments</h2>
              <Comments comments={this.props.comments} />
              <CommentBoxContainer ticketId={this.props.match.params.id} />
            </div> )
        return(<div>
                  <TicketDetails ticket={this.props.ticket}
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
  ticket: state.ticket,
  comments: state.comments,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadTicket, updateTicket, deleteTicket, getCommentsByTicket})(TicketDetailsContainer)
