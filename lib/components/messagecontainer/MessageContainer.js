import React, { Component } from 'react';
import { pick, map, extend, uniqBy } from 'lodash';
import Message from './Message.js';
import UsersContainer from './UsersContainer';
import Search from './Search.js';
import Sort from './Sort.js';
<<<<<<< HEAD

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
=======
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
>>>>>>> 02a196fa8c08f75803aa2209c3fe423e397ba537
  }

  componentDidMount(){
    this.handleAllUsers();
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleMessageSearch(searchString) {
    const { messages } = this.props;
    let tempArr = [];
    for (let i = 0; i < messages.length; i++) {
      // let userId = messages[i].user.uid;
      // if(userId === this.state.users[0].user.uid || userId === this.state.users[1].user.uid) {
        let lowCaseMessage = messages[i].content.toLowerCase();
        if(lowCaseMessage.includes(searchString.toLowerCase())){
          tempArr.push(messages[i]);
        }
      // }
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

  // renderMessage() {
  //   if(this.state.users.length <= 1) {
  //   const searchedMessages = this.handleMessageSearch(this.state.searchInput);
  //   return searchedMessages.map(m => {
  //     return (
  //       <li key={m.key}>
  //         <Message m={m} />
  //       </li>
  //     )
  //   });
  // }
  // }

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
    this.setState({ users: uniqUsers });
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
    this.setState({ users: [this.props.user.uid].concat(m.user.uid) })
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
