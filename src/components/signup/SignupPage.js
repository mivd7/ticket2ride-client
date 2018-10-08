import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {signup} from '../../actions/users';
import SignupForm from './SignupForm';

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.name, data.lastName, data.email, data.password);
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/login" />
		)

		return (
			<div className='signupPage'>
				<div className='signupBox'>
					<h1>Sign up</h1>

					<SignupForm onSubmit={this.handleSubmit} />

					<p style={{color:'red'}}>{ this.props.signup.error }</p>

				 	<Link to='/login' ><p>Or login</p></Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
};

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
