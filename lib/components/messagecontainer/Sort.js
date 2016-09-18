import React, { Component } from 'react';

export default class Sort extends Component {

  render() {
    const { handleSortNormal, handleSortReverse } = this.props;
    return (
      <section>
      <button className="sort-up"
              onClick={handleSortNormal}>Sort Up</button>
      <button className="sort-down"
              onClick={handleSortReverse}>Sort Down</button>
      </section>
    )
  }
}
