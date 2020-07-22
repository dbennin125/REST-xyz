import React from 'react';
import { shallow } from 'enzyme';
import RestForm from './RestForm';

describe('RestForm component', () => {
  it('has a text input with a value set to text prop', () => {
    const wrapper = shallow(<RestForm text="Hello World!"  method="GET"/>);
    expect(wrapper.find('input[name="text"]').prop('value')).toEqual('Hello World!');
  });
  it('has a radio input with a value set to text prop', () => {
    const wrapper = shallow(<RestForm text="Hello World!" method="GET" />);
    expect(wrapper.find('input[name="method"]').prop('value')).toEqual('GET');
  });
});
  
