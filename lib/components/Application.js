import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, uniqBy } from 'lodash';
import SignIn from './SignIn';
import MessageContainer from './messagecontainer/MessageContainer';
import SendMessageContainer from './sendmessagecontainer/SendMessageContainer';
import User from './messagecontainer/User';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    const { user } = this.state;
    const uniqUsers = uniqBy(this.state.messages, (e) => { return e.user.displayName; });
    return (
      uniqUsers.map(m => {
        return (
          <section key={m.key}>
            <User m={m} user={user}/>
          </section>
        )
      })
    )
  }

  componentWillMount() {
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
    if (user) {
      return (
        <div className="Application">
          <MessageContainer
            reference={reference}
            messages={messages}
            user={user}
            getUsers={this.getUsers}
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
