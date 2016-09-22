import React, { Component } from 'react';
import moment from 'moment';

export default class Message extends Component {
  render() {
    const { m } = this.props;

    return (
      <article className="message">
        <h2 className="message-date">{moment(m.createdAt).format('MMMM Do, h:mm a')} <span className="name">{m.user.displayName}</span></h2>
        <h2 className="message-content">{m.content}</h2>
      </article>
    )
  }
}
