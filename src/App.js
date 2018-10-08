import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailsContainer from './components/events/EventDetailsContainer'
import EventsListContainer from './components/events/EventsListContainer'
import TicketDetailsContainer from './components/tickets/TicketDetailsContainer'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import SignupPage from './components/signup/SignupPage'
import "./styles.css";
import TopBar from './auth/topbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <div className="App-header">
            <TopBar />
        </div>
          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/" exact component={EventsListContainer} />
            <Route path="/events/:id" component={EventDetailsContainer} />
            <Route path="/tickets/:id" component={TicketDetailsContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
