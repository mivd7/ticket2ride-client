import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import TicketListContainer from '../tickets/TicketListContainer'
import TicketFormContainer from '../tickets/TicketFormContainer'
import {loadEvent, updateEvent, deleteEvent} from '../../actions/events'
import {getTicketsByEvent} from '../../actions/tickets'

class EventDetailsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    const tickets = this.props.tickets
    console.log(tickets)
    this.props.loadEvent(Number(this.props.match.params.id))
    this.props.getTicketsByEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        name: '',
        description: '',
        image: '',
        startdate: '',
        enddate: ''
      }
    })
  }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }


  render() {
    console.log(this.props.tickets)
    console.log(this.props.match.params.id)
    // { name: 'cherries', quantity: 5 }
    return(
          <div>
          <EventDetails event={this.props.event}
                         onDelete={this.onDelete}
                         onSubmit={this.onSubmit}
                         onChange={this.onChange}
                         onEdit={this.onEdit}
                         editMode={this.state.editMode}
                         formValues={this.state.formValues}/>
          <TicketListContainer />
          <TicketFormContainer eventId={this.props.match.params.id} tickets={this.props.tickets}/>
          </div> )
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tickets: state.tickets
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent, getTicketsByEvent})(EventDetailsContainer)
