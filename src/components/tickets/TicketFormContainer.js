import React from 'react'
// import {connect} from 'react-redux'
// import {createTicket} from '../../actions/tickets'
// import TicketForm from './TicketForm'

export default class TicketFormContainer extends React.PureComponent {
  state = {}

	handleSubmit = (e) => {
		e.preventDefault();
    // this.setState({
    //   description: '',
    //   price: '',
    //   thumbnail: ''
    // })
		this.props.onSubmit(this.state);
	}

	handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>Sell Your Ticket</h1>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label>
          Description:
          <input type="text" name="description" values={this.state.description} />
        </label>
        <label>
          Price:
          <input type="text" name="price" values={this.state.price} />
        </label>
        <label>
          Image(URL):
          <input type="text" name="thumbnail" values={this.state.thumbnail} />
        </label>
        <button type="submit">Add</button>
    </form>
    </div>)
  }
}

// export default connect(null, {createTicket})(TicketFormContainer)
