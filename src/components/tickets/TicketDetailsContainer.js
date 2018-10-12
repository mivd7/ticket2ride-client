import React from 'react'
import {connect} from 'react-redux'
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
    console.log(this.props.match.params.id)
    this.props.loadTicket(Number(this.props.match.params.id))
    this.props.getCommentsByTicket(Number(this.props.match.params.id))
  }

  render() {
    // const averagePrice = Object.values(tickets)
    //   .reduce((acc, currentticket) => {
    //     return  acc + currentticket.price },0) / Object.values(tickets).length;
    //
    // const risk = ticketRisk(customers[ticket.user_id].tickets_offered,
    //   ticket.price,avgPrice,ticket.time_of_creation,ticketsInfo[ticket.id].comments_received)

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

      return( <TicketDetails ticket={this.props.ticket}
                     onDelete={this.onDelete}
                     onSubmit={this.onSubmit}
                     onChange={this.onChange}
                     onEdit={this.onEdit}
                     editMode={this.state.editMode}
                     formValues={this.state.formValues} /> )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.comments,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadTicket, updateTicket, deleteTicket, getCommentsByTicket})(TicketDetailsContainer)
