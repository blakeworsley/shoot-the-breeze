import React, { Component } from 'react';

export default class Sort extends Component {

  render() {
    const { handleSortNormal, handleSortReverse } = this.props;
    return (
      <section className="">
      <button
        className="sort-up"
        onClick={handleSortNormal}>
        Sort ⬆
      </button>
      <button className="sort-down"
        onClick={handleSortReverse}>Sort ⬇</button>
      </section>
    )
  }
}
