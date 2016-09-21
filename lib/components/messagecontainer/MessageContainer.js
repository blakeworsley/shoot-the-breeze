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
      draftSearch: '',
      sortOrder: true,
    };
    this.handleMessageSearch = this.handleMessageSearch.bind(this);
  }

  handleSearchInput(e) {
    this.setState({ draftSearch: e.target.value });
  }

  handleMessageSearch(searchString) {
    const { messages } = this.props;
    let tempArr = [];
    for (var i = 0; i < messages.length; i++) {
      let lowCaseMessage = messages[i].content.toLowerCase();
      if(lowCaseMessage.includes(searchString.toLowerCase())){
        tempArr.push(messages[i]);
      }
    }
    return tempArr;
  }

  renderMessage() {
    const tempArr = this.handleMessageSearch(this.state.draftSearch);
    return tempArr.map(m => {
      return (
        <li key={m.key}>
          <Message m={m} />
        </li>
      )
    });
  }

  reverseRenderMessage() {
    const tempArr = this.handleMessageSearch(this.state.draftSearch);
    return this.state.searchedMessages.map(m => {
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
