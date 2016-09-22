import React, {Component} from 'react';

export default class SignIn extends Component {
  render() {
    return (
      <footer className="send-message-container">
        <button className="SignInButton"
          onClick={() => this.props.signIn()}
        >
          Sign In
        </button>
      </footer>
    );
  }
}
