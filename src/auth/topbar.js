import * as React from 'react'
import {getUser} from '../actions/users'
import {userId} from './jwt'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {sleep} from '../constants'
// import * as socket from './socketio'

class TopBar extends React.Component {
  componentDidMount() {
    const user = userId(this.props.currentUser.jwt)
    this.props.getUser(user)
  }

  render() {
    let activeUser = this.props.user
    console.log(this.props.user)
    if (this.props.currentUser === null)
    return (<div><h1>TICKET 2 RIDE</h1>
      <p>Welcome, guest please <Link to={'/login'}>login</Link> or <Link to={`/signup`}>sign up</Link></p></div>)

    return (<div><h1>TICKET 2 RIDE</h1>
            <p>Welcome back, {activeUser.firstName}!</p>
            <button><Link to={'/logout'}>logout</Link></button></div>)
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  user: state.users
})

export default connect(mapStateToProps, {getUser})(TopBar)
