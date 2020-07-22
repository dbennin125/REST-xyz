import React from 'react';
import { shallow } from 'enzyme';
import RestForm from './RestForm';


describe('RestForm component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RestForm 
      URL="Hello World!" 
      method="GET"/>);
  });
  it('has a text input with a value set to text prop', () => {
    expect(wrapper.find('input[name="text"]').prop('value')).toEqual('Hello World!');
  });
  it('has a GET radio input with a value set to method prop', () => {
    expect(wrapper.find('input[name="method"]').findWhere(n => n.prop('checked')).prop('value')).toEqual('GET');
  });

 
});
  
