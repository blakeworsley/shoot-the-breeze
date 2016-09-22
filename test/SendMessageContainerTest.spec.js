import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import SendMessageContainer from '../lib/components/sendmessagecontainer/SendMessageContainer';
import MessageInput from '../lib/components/sendmessagecontainer/MessageInput';
import ClearButton from '../lib/components/sendmessagecontainer/ClearButton';
import CurrentUser from '../lib/components/sendmessagecontainer/CurrentUser';
import SubmitButton from '../lib/components/sendmessagecontainer/SubmitButton';



describe('SendMessageContainer', () => {
  const wrapper = shallow(<SendMessageContainer />);

  it('renders as a <footer>', () => {
    assert.equal(wrapper.type(), 'footer');
  });
  it('should have user props', () => {
    expect(wrapper.props().user).to.be.defined;
  });
});

describe('MessageInput', () => {
  const wrapper = shallow(<MessageInput />);

  it('renders as a <section>', () => {
    assert.equal(wrapper.type(), 'section');
  });
  it('renders an <input>', () => {
    assert.lengthOf(wrapper.find('input'), 1);
  });
  it('should have handleMessageInput props', () => {
    expect(wrapper.props().handleMessageInput).to.be.defined;
  });
  it('should have draftMessage props', () => {
    expect(wrapper.props().draftMessage).to.be.defined;
  });
});

describe('ClearButton', () => {
  context('testing mounting', () => {
    it('renders as a <section>', () => {
      const wrapper = shallow(<ClearButton />);
      assert.equal(wrapper.type(), 'section');
    });
    it('renders an <button>', () => {
      const wrapper = shallow(<ClearButton />);
      assert.lengthOf(wrapper.find('button'), 1);
    });
  });
});

describe('CurrentUser', () => {
  context('shallow', () => {

    it('renders as a <section>', () => {
      const wrapper = shallow(<CurrentUser />);
      assert.equal(wrapper.type(), 'section');
    });
  });
});

describe('SubmitButton', () => {

  it('renders as a <section>', () => {
    const wrapper = shallow(<SubmitButton />);
    assert.equal(wrapper.type(), 'section');
  });
  it('renders an <button>', () => {
    const wrapper = shallow(<SubmitButton />);
    assert.lengthOf(wrapper.find('button'), 1);
  });
});
