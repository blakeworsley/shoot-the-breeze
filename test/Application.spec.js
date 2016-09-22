import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';

describe('Application', () => {
  const shallowWrapper = shallow(<Application />);
  const mountWrapper = mount(<Application />);

  it('renders as a <section>', () => {
    assert.equal(shallowWrapper.type(), 'section');
  });

  

  // it('allows us to set default a state', () => {
  //
  //   assert.equal(mountWrapper.state('messages'), null);
  //   mountWrapper.setState({ messages: 'jello'});
  //   assert.equal(mountWrapper.state('messages'), 'jello');
  //
  // });
});



// gets a user from firebase
// gets messages from firebase

//searching works
