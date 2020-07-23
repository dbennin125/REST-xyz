import React from 'react';
import { shallow } from 'enzyme';
import HistoryDisplay from './HistoryDisplay';

describe('HistoryDisplay component', () => {
  let wrapper;
  beforeEach(() => {
    const history = [
      'https://futuramaapi.herokuapp.com/api/quotes/',
      'https://futuramaapi.herokuapp.com/api/quotes/1',
      'https://futuramaapi.herokuapp.com/api/quotes/2',
      'https://futuramaapi.herokuapp.com/api/quotes/3',
      'https://futuramaapi.herokuapp.com/api/quotes/4'
    ];
    wrapper = shallow(<HistoryDisplay 
      history={history} 
    />);
  });
  it('to have 5 list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);

  });
});
