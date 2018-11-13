import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({
      email,
      password,
    });
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render = () => (
    <form onSubmit={this.submitForm}>
        <h1>Registration</h1>
      <label>
        E-mail:
        <input type="email" name="email" onChange={this.onChangeInput} value={this.state.email} placeholder="E-mail" />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={this.onChangeInput} value={this.state.password} placeholder="Password" />
      </label>
      <button>Send</button>
    </form>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
