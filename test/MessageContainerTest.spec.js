import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Search from '../lib/components/messagecontainer/Search';
import Sort from '../lib/components/messagecontainer/Sort';

describe('Search', () => {
  const wrapper = shallow(<Search />);

  it('renders as a <section>', () => {
    assert.equal(wrapper.type(), 'section');
  });
  it('renders an <input>', () => {
    assert.lengthOf(wrapper.find('input'), 1);
  });
});

describe('Sort', () => {
  const shallowWrapper = shallow(<Sort />);

  it('renders as a <section>', () => {
    assert.equal(shallowWrapper.type(), 'section');
  });
  it('renders an <button>', () => {
    assert.lengthOf(shallowWrapper.find('button'), 2);
  });
});
