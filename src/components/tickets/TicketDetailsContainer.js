import React from 'react'
import {connect} from 'react-redux'
import TicketDetails from './TicketDetails'
// import CommeListContainer from '../tickets/TicketListContainer'
// import TicketFormContainer from '../tickets/TicketFormContainer'
import {loadTicket, updateTicket, deleteTicket} from '../../actions/tickets'
import {getCommentsByTicket} from '../../actions/comments'

class TicketDetailsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.loadTicket(Number(this.props.match.params.id))
  }

  render() {
    console.log(this.props.ticket)

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
  comments: state.comments
})

export default connect(mapStateToProps, {loadTicket, updateTicket, deleteTicket, getCommentsByTicket})(TicketDetailsContainer)
