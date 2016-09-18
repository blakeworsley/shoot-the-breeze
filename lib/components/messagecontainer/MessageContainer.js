import React, { Component } from 'react';
import { pick, map, extend } from 'lodash';
import Message from './Message.js';
import UsersContainer from './UsersContainer';
import HeaderContainer from './HeaderContainer';



export default class MessageContainer extends Component {
  constructor() {
      super();
      this.state = {
        searchedMessages: [],
        draftSearch: 'yo'
      };
  }

  componentWillMount() {
    const { messages } = this.props;
    this.setState({ searchedMessages: messages });
  }

  handleMessageSearch() {
    const { messages } = this.props;

    tempArr = [];
    for (var i = 0; i < messages.length; i++) {
      if(messages[i].content.toLowerCase().search(this.state.draftSearch)){
        tempArr.push(messages[i].content);
      }
    }
    this.setState({ searchedMessages: tempArr });
  }

  renderMessage() {
    return this.props.messages.map(m => {
      return (
        <li key={m.key}>
          <Message m={m} />
        </li>
      )
    });
  }

  render() {
    const { messages, user, getUsers} = this.props;
    return (
      <section className="messsage-container">
        <HeaderContainer />
        <ul className="messages">
          {this.renderMessage()}
        </ul>
        <UsersContainer
          messages={messages}
          user={user}
          getUsers={getUsers}
        />
      </section>

    )
  }
}

// SORT
// sortDown: true
// {() => if(this.state.sortDown){this.handleSortMessage()}
//       else{this.renderMessage()}}

// handleSortMessage() {
//   return this.props.messages.reverse().map(m => {
//     return (
//       <div key={m.key}>
//         <Message m={m} />
//       </div>
//     )
//   });
// }
