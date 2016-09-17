import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, uniqBy } from 'lodash';
import SignIn from './SignIn';
import HeaderContainer from './headercontainer/HeaderContainer';
import MessageContainer from './messagecontainer/MessageContainer';
import UsersContainer from './userscontainer/UsersContainer';
import SendMessageContainer from './sendmessagecontainer/SendMessageContainer';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      users: []
    };
  }

  getUsers() {
    const uniqUsers = uniqBy(this.state.messages, (e) => { return e.user.displayName; });
    return (
       <section className="UserContainer">
        <h2>Users</h2>
        <ul>
          {uniqUsers.map(m => <li key={m.key}> {m.user.displayName} ({m.user.email}) </li> )}
         </ul>
       </section>
     )



    this.setState({users: this.state.users.push(uniqUsers)});
    console.log(uniqUsers);
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
          {this.getUsers()}
          <HeaderContainer />
          <MessageContainer
            reference={reference}
            messages={this.state.messages}
          />
          <UsersContainer
            messages={this.state.messages}
            user={this.state.user}
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
