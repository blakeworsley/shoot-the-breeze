import React, { Component } from 'react';
import moment from 'moment';

export default class Message extends Component {
  render() {
    const { m } = this.props

    return (
      <article className="message">
        <h2 className="message-date">{moment(m.createdAt).format('MMMM Do, h:mm a')}</h2>
        <h2 className="mobile-message-date" display="hidden">{moment(m.createdAt).format('M/D, h:mm a')}</h2>
        <h2 className="message-username">{m.user.displayName}</h2>
        <h2 className="message-content">{m.content}</h2>
      </article>
    )
  }
}
