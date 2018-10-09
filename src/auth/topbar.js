import * as React from 'react'
import {getUser} from '../actions/users'
import {userId} from './jwt'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class TopBar extends React.Component {
  componentDidMount() {
    const user = userId(this.props.currentUser.jwt)
    this.props.getUser(user)
  }

  render() {
    let activeUser = this.props.user
    console.log(this.props.user)
    if (this.props.currentUser === null)
      return (<div>
          <p>Welcome, guest please <Link to={'/login'}>login</Link> or <Link to={`/signup`}>sign up</Link></p></div>)
    if (activeUser && activeUser.hasOwnProperty('id'))
      return (<div>
              <p>Welcome back, {activeUser.firstName}!</p>
              <button><Link to={'/logout'}>logout</Link></button>
              </div>)
      return (<div>
                <p>Welcome back!</p>
                <button><Link to={'/logout'}>logout</Link></button></div>)
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  user: state.users
})

export default connect(mapStateToProps, {getUser})(TopBar)
