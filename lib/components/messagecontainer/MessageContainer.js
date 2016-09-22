import React, { Component } from 'react';
import { pick, map, extend, uniqBy } from 'lodash';
import Message from './Message.js';
import UsersContainer from './UsersContainer';
import Search from './Search.js';
import Sort from './Sort.js';
import User from './User';

export default class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      sortOrder: true,
      users: [],
    };
    this.handleMessageSearch = this.handleMessageSearch.bind(this);
  }

  componentDidMount(){
    this.handleAllUsers();
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleMessageSearch(searchString) {
    const { messages, user } = this.props;
    let tempArr = [];
    for (let i = 0; i < messages.length; i++) {
      let userId = messages[i].user.uid;
      for (var u = 0; u < this.state.users.length; u++) {
        if(userId === this.state.users[u].uid) {
          let lowCaseMessage = messages[i].content.toLowerCase();
          if(lowCaseMessage.includes(searchString.toLowerCase())){
            tempArr.push(messages[i]);
          }
        }
      }
    }
    return tempArr;
  }

  renderMessage() {
    const searchedMessages = this.handleMessageSearch(this.state.searchInput);
    return searchedMessages.map(m => {
      return (
        <li key={m.key}>
          <Message m={m} />
        </li>
      )
    });
  }

  reverseRenderMessage() {
    const searchedMessages = this.handleMessageSearch(this.state.searchInput);
    return searchedMessages.map(m => {
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

  handleAllUsers() {
    const uniqUsers = uniqBy(this.props.messages, (e) => { return e.user.uid; });
    this.setState({ users: uniqUsers.map(m => { return m.user }) });
  }

  handleGetUsers() {
    const { user, messages } = this.props;
    const uniqUsers = uniqBy(messages, (e) => { return e.user.displayName; });
    return (
      uniqUsers.map(m => {
        return (
          <section key={m.key}>
            <User m={m} user={user} handleToggleUser={(message) => this.handleToggleUser(message)}/>
          </section>
        )
      })
    )
  }

  handleToggleUser(m) {
    this.setState({ users: [this.props.user].concat(m.user) })
  }

  render() {
    const { messages, user } = this.props;
    const { searchInput } = this.state

    return (
      <section className="message-container">
        <nav className="header">
          <h1>Shoot the Breeze</h1>
          <Search handleSearchInput={(e) => this.handleSearchInput(e)}
                  searchInput={searchInput}
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
            handleGetUsers={this.handleGetUsers.bind(this)}
          />
        </section>
      </section>

    )
  }
}
