import React, { Component } from 'react';

export default class CurrentUser extends Component {
  render() {
    return (
      <section className="current-user">
        <h2>Logged in as: {this.props.user.displayName} ({this.props.user.email}) </h2>
      </section>
    )
  }
}
