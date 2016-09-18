import React, { Component } from 'react';
import User from './User.js';

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      users: this.props.users
    };
  }

  render() {
    const { user, messages, getUsers, m } = this.props;
    return (
      <aside className="users-container">
        <h1>Users</h1>
          {getUsers()}
      </aside>
    )
  }
}
