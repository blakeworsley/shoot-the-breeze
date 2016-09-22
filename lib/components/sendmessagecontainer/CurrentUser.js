import React, { Component } from 'react';

export default class CurrentUser extends Component {
  render() {
    return (
      <section className="current-user">
      <button className="SignInButton"
        onClick={() => this.props.signIn()}
      >
        Sign In
      </button>
        {/* <h2>Logged in as: {this.props.user.displayName} ({this.props.user.email}) </h2> */}
      </section>
    )
  }
}
