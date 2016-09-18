import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { m } = this.props;
    return (
      <article className="users-container-user">
        <h2>
          {m.user.displayName}
          <span>({m.user.email})</span>
        </h2>
        <div className="active"></div>
      </article>
    )
  }
}
