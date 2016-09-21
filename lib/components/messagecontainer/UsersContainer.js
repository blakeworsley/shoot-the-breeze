import React, { Component } from 'react';
import User from './User.js';

export default class UsersContainer extends Component {
  render() {
    const { handleGetUsers, handleToggleUser } = this.props;
    return (
      <aside className="users-container">
        <h1>Users</h1>
        <h2>{handleGetUsers()}</h2>
      </aside>
    )
  }
}
