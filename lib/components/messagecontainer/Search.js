import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <section>
        <input placeholder="filter"
          className="search-input"
          onChange={this.props.handleSearchInput}
          value={this.props.draftSearch}
        />

      </section>
    )
  }
}
