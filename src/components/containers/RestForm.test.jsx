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
    expect(wrapper.state('text')).not.toBeUndefined();
  });

});
  
