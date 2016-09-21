import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
// import mockMessages from './helpers/mock-messages';


import CharacterCount from '../lib/components/sendmessagecontainer/CharacterCount';
// import ClearButton from '../lib/components/sendmessagecontainer/ClearButton';
// import CurrentUser from '../lib/components/sendmessagecontainer/CurrentUser';
// import MessageInput from '../lib/components/sendmessagecontainer/MessageInput';
// import SendMessageContainer from '../lib/components/sendmessagecontainer/SendMessageContainer';
// import SubmitButton from '../lib/components/sendmessagecontainer/SubmitButton';



  // it('renders charactercount in an h2 with character count class', () => {
  //   const wrapper = render(<CharacterCount/>)
  //   expect(wrapper.find('.character-count')).to.have.length(1);
  // })


describe('CharacterCount', () => {

  context('testing mounting', () => {
    it('renders as a <section>', () => {
      const wrapper = shallow(<CharacterCount />);
      assert.equal(wrapper.type(), 'section');
    });

    it('renders an <h2>', () => {
      // const wrapper = mount(<MessagesArea messages={mockMessages} />)
      const wrapper = shallow(<CharacterCount />);
      assert.lengthOf(wrapper.find('h2'), 1);
    });
  })



});
//
// describe('ClearButton', () => {
//   const shallowWrapper = shallow(<ClearButton />);
//
//   it.skip('renders as a <section>', () => {
//     assert.equal(shallowWrapper.type(), 'section');
//   });
//   it.skip('renders an <button>', () => {
//     assert.lengthOf(shallowWrapper.find('button'), 1);
//   });
// });
//
// describe('CurrentUser', () => {
//   context('shallow', () => {
//     const wrapper = shallow(<CurrentUser />);
//     // let user = mockMessages[0].user;
//     // wrapper.state.user = user;
//     // wrapper.state.messages = mockMessages;
//
//     it.skip('renders as a <section>', () => {
//       assert.equal(wrapper.type(), 'section');
//     });
//     it.skip('renders an <h2>', () => {
//       assert.lengthOf(wrapper.find('h2'), 1);
//     });
//   })
// });
//
// describe('MessageInput', () => {
//   const shallowWrapper = shallow(<MessageInput />);
//
//   it.skip('renders as a <section>', () => {
//     assert.equal(shallowWrapper.type(), 'section');
//   });
//   it.skip('renders an <input>', () => {
//     assert.lengthOf(shallowWrapper.find('input'), 1);
//   });
// });
//
// describe('SendMessageContainer', () => {
//   const shallowWrapper = shallow(<SendMessageContainer />);
//
//   it.skip('renders as a <footer>', () => {
//     assert.equal(shallowWrapper.type(), 'footer');
//   });
//
// });
//
// describe('Submit.Button', () => {
//   const shallowWrapper = shallow(<Submit.Button />);
//
//   it.skip('renders as a <section>', () => {
//     assert.equal(shallowWrapper.type(), 'section');
//   });
//   it.skip('renders an <button>', () => {
//     assert.lengthOf(shallowWrapper.find('button'), 1);
//   });
// });
