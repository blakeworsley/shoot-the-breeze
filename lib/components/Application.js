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
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }


  render() {
    const { user, messages, draftMessage } = this.state;
    if (user) {
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
    } else {
      return (
        <div className="application">
          <MessageContainer
            reference={reference}
            messages={messages}
            user={user}
          />
          <SignIn signIn={signIn}/>
        </div>
      )
    }
  }
}
