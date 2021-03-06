import React, { Component } from 'react';

export default class CurrentUser extends Component {
  render() {
    if(this.props.user){
      return (
        <section className="current-user">
        <h2>Logged in as: {this.props.user.displayName} ({this.props.user.email}) </h2>
        </section>
      )
    }
    return (
      <section className="current-user">
      <h2>Please Log In </h2>
      </section>
    )
  }
}
