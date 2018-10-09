import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

  render () {
      console.log(this.props)
        if (!this.props.currentUser) return (<div>
            <h1>TICKET 2 RIDE</h1>
            <p>Welcome, guest please <Link to={'/login'}>login</Link> or <Link to={`/signup`}>sign up</Link>
            </p></div>)

        return (<div>
                <button onClick={this.onClick} />
                <h1>TICKET 2 RIDE</h1>
                Welcome, {this.props.user.firstName}
                <a id="home" className="menu-item" href="/">Events</a>
                <br />
                <a id="about" className="menu-item" href="/logout">Log Out</a>
                <br />
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                </div>
        );
    }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  user: state.users
})

export default connect(mapStateToProps)(SideBar)
