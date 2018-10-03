import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailsContainer from './components/events/EventDetailsContainer'
import EventsListContainer from './components/events/EventsListContainer'
// import TicketFormContainer from './components/tickets/TicketFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
