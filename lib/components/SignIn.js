import React, {Component} from 'react';

export default class SignIn extends Component {
  render() {
    return (
      <section className="SignIn">
        <h1 className="SignIn-title">Shoot the Breeze</h1>
        <button className="SignInButton"
          onClick={() => this.props.signIn()}
        >
          Sign In
        </button>
      </section>
    );
  }
}
