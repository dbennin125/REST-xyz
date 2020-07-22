import React from 'react';
import { shallow } from 'enzyme';
import RestForm from './RestForm';

describe('RestForm component', () => {
  it('has an input with a value set to text prop', () => {
    const wrapper = shallow(<RestForm text="Hello World!" />);
    expect(wrapper.find('input[name="text"]').prop('value')).toEqual('Hello World!');
  });
});
  
