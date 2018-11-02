import React, {PureComponent} from 'react';
// import TicketForm from './TicketForm'

export default class TicketFormContainer extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

	render() {
    return (
      <div>
      <h1>Sell Your Ticket</h1>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
    </div>
  )}
}
