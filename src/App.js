import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailsContainer from './components/events/EventDetailsContainer'
import EventsListContainer from './components/events/EventsListContainer'
import TicketDetailsContainer from './components/tickets/TicketDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
          <Route path="/tickets/:id" component={TicketDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
