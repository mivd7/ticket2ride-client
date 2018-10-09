import * as React from 'react'
import {getUser} from '../../actions/users'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import ReduxBurgerMenu from './menu';
// import toggleMenu from '../../actions/menu'

class TopBar extends React.Component {
  render() {
    if (this.props.currentUser === null)
      return (<div>
          <h1>TICKET 2 RIDE</h1>
          <p>Welcome, guest please <Link to={'/login'}>login</Link> or <Link to={`/signup`}>sign up</Link></p>
          </div>)

      return (<div>
              <h1>TICKET 2 RIDE</h1>
              <p>Welcome back, {this.props.currentUser.user.firstName}!</p>
              <button><Link to={'/logout'}>Logout</Link></button>
              </div>)
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

export default connect(mapStateToProps, {getUser})(TopBar)
