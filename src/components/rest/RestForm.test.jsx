import React from 'react';
import { shallow } from 'enzyme';
import RestForm from './RestForm';


describe('RestForm component', () => {
  let wrapper;
  let handleChange;
  let handleSubmit;
  
  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();

    wrapper = shallow(<RestForm 
      URL="Hello World!" 
      method="GET"
      onChange={handleChange}
      onSubmit={handleSubmit}
      body="some String"
    />);
  });

  it('has a text input with a value set to text prop', () => {
    expect(wrapper.find('input[name="url"]').prop('value')).toEqual('Hello World!');
  });
  it('has a GET radio input with a value set to method prop', () => {
    expect(wrapper.find('input[name="method"]').findWhere(n => n.prop('checked')).prop('value')).toEqual('GET');
  });
  it('invokes an onChange prop when text input is changed', () => {
    wrapper.find('input[name="url"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('invokes an onChange prop when radio input is changed', () => {
    wrapper.find('input[name="method"]').findWhere(radios => radios.prop('checked')).simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('invokes onSubmit prop for the form when button pressed', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  
