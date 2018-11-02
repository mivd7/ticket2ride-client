import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import TicketListContainer from '../tickets/TicketListContainer'
import TicketFormContainer from '../tickets/TicketFormContainer'
import {loadEvent, updateEvent, deleteEvent} from '../../actions/events'
import {getTicketsByEvent, createTicket} from '../../actions/tickets'
import './Events.css'

class EventDetailsContainer extends React.PureComponent {
  state = {
    editMode: false
  }

  componentDidMount() {
    this.props.getTicketsByEvent(this.props.match.params.id)
    if (this.props.event === null) return this.props.loadEvent(Number(this.props.match.params.id))
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

  formSubmit = (data) => {
        this.props.createTicket(this.props.match.params.id, data.description, data.price, data.thumbnail);
        this.setState({data})
        this.props.getTicketsByEvent(this.props.match.params.id);
      }


  render() {
    console.log(this.props)
      return(<div className="eventBody">
             <EventDetails event={this.props.event}
                         onDelete={this.onDelete}
                         onSubmit={this.onSubmit}
                         onChange={this.onChange}
                         onEdit={this.onEdit}
                         editMode={this.state.editMode}
                         formValues={this.state.formValues}/>
            <TicketListContainer tickets={this.props.tickets} eventId={this.props.match.params.id} />
            <TicketFormContainer onSubmit={this.formSubmit} />
          </div> )
      }
}

const mapStateToProps = state => ({
  event: state.event,
  tickets: state.tickets,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent, getTicketsByEvent, createTicket})(EventDetailsContainer)
