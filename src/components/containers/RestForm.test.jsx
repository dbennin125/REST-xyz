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
    expect(wrapper.state('url')).not.toBeUndefined();
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
  it('has a handleChange method that updates url state', () =>{
    wrapper.instance().handleChange({
      target: {
        name:'url',
        value: 'new url value'
      }
    });
    expect(wrapper.state('url')).toEqual('new url value');
  });

});
  
