import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import SignIn from './SignIn';
import MessageContainer from './messagecontainer/MessageContainer';
import SendMessageContainer from './sendmessagecontainer/SendMessageContainer';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: null,
      user: null,
      userMessages: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }

  render() {
    const { user, messages, draftMessage } = this.state;
    if (messages) {
      return (
        <div className="application">
          <MessageContainer
            reference={reference}
            messages={messages}
            user={user}
          />
          <SendMessageContainer reference={reference} user={user} />
        </div>
      )
    }
    return (
      <section>
        <SignIn signIn={signIn}/>
      </section>
    )
  }
}
