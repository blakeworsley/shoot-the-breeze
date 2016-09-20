import React, { Component } from 'react';
import { pick, map, extend } from 'lodash';
import Message from './Message.js';
import UsersContainer from './UsersContainer';
import Search from './Search.js';
import Sort from './Sort.js';

export default class MessageContainer extends Component {
  constructor() {
      super();
      this.state = {
        searchedMessages: this.props.messages,
        draftSearch: '',
        sortOrder: true,
      };
      this.handleMessageSearch = this.handleMessageSearch.bind(this);
  }

  componentWillMount() {
    const { messages } = this.props;
    this.setState({ searchedMessages: messages });
  }

  handleSearchInput(e) {
    const inputValue = e.target.value;
    this.setState({ draftSearch: inputValue });
    this.handleMessageSearch();
  }

  handleMessageSearch() {
    const { messages } = this.props;
    let tempArr = [];
    for (var i = 0; i < messages.length; i++) {
      let lowCaseMessage = messages[i].content.toLowerCase();
      if(lowCaseMessage.search(this.state.draftSearch)){
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

  reverseRenderMessage() {
    return this.props.messages.map(m => {
      return (
        <li key={m.key}>
          <Message m={m} />
        </li>
      )
    }).reverse();
  }

  handleSortNormal() {
    this.setState({ sortOrder: true })

  }

  handleSortReverse() {
    this.setState({ sortOrder: false })
  }

  handleSortRender() {
    if(this.state.sortOrder) return this.renderMessage();
    else return this.reverseRenderMessage();
  }

  render() {
    const { messages, user, getUsers} = this.props;
    return (
      <section className="message-container">
        <nav className="header">
          <h1>Shoot the Breeze</h1>
          <Search handleSearchInput={(e) => this.handleSearchInput(e)}
                  draftSearch={this.state.draftSearch}
          />
          <Sort handleSortNormal={() => this.handleSortNormal()}
                handleSortReverse={() => this.handleSortReverse()}
                />
        </nav>
        <section className="main">
          <ul className="messages">
            {this.handleSortRender()}
          </ul>
          <UsersContainer
            messages={messages}
            user={user}
            getUsers={getUsers}
          />
        </section>
      </section>

    )
  }
}
