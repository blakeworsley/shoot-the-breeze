import React, { Component } from 'react';

export default class MessageInput extends Component {
  render() {
    return (
      <section className="message-input-section">
        <input
          placeholder="Message"
          className="message-input"
          onChange={this.props.handleMessageInput}
          value={this.props.draftMessage}
        />
      </section>
    )
  }
}
