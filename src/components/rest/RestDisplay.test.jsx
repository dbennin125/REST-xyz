import React from 'react';
import { shallow } from 'enzyme';
import RestDisplay from './RestDisplay';

describe('RestDisplay component', () => {
  it('renders RestDisplay', () => {
    const wrapper = shallow(<RestDisplay display={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
