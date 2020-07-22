import React from 'react';
import { shallow } from 'enzyme';
import RestContainer from './RestContainer';


describe('RestContainer component', () => {
  let wrapper;
 
  
  beforeEach(() => {
 

    wrapper = shallow(<RestContainer 
  
    />);
  });

  it('has a text state', () => {
    expect(wrapper.state('URL')).not.toBeUndefined();
  });
  it('has a method state', () => {
    expect(wrapper.state('method')).not.toBeUndefined();
  });
  it('has a body state', () => {
    expect(wrapper.state('body')).not.toBeUndefined();
  });
  it('has a display state', () => {
    expect(wrapper.state('display')).toEqual({ 'working':'Nothing to see here!' });
  });
  it('has a handleChange method that updates URL state', () =>{
    wrapper.instance().handleChange({
      target: {
        name:'text',
        value: 'new text value'
      }
    });
    expect(wrapper.state('text')).toEqual('new text value');
  });

});
  
