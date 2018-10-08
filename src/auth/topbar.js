import * as React from 'react'
import {getUser} from '../actions/users'
import {userId} from './jwt'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class TopBar extends React.Component {
  componentDidMount() {
    // const activeUser = userId(this.props.user.jwt)
    // this.props.getUser(activeUser)
  }

  render() {
    console.log(this.props.user)
    if (this.props.user === null)
    return (<div><h1>TICKET 2 RIDE</h1>
      <p>Welcome, guest please <Link to={'/login'}>login</Link> or <Link to={`/signup`}>sign up</Link></p></div>)
    return (<div><h1>TICKET 2 RIDE</h1>
            <p>Welcome back!</p>
            <button><Link to={'/logout'}>logout</Link></button></div>)
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps, {getUser})(TopBar)
