import React from 'react';
import { shallow } from 'enzyme';
import HistoryDisplay from './HistoryDisplay';

describe('HistoryDisplay component', () => {
  let wrapper;
  beforeEach(() => {
    const history = [
      { url:'https://futuramaapi.herokuapp.com/api/quotes/', method: 'GET' },
      { url:'https://futuramaapi.herokuapp.com/api/quotes/1', method: 'POST', 
        body: 'A bunch of new JSON and junk' },
      { url:'https://futuramaapi.herokuapp.com/api/quotes/2', method:'GET', },
      { url:'https://futuramaapi.herokuapp.com/api/quotes/3', method:'POST' },
      { url:'https://futuramaapi.herokuapp.com/api/quotes/4', method:'PUT',
        body: 'add in this text!'  }
    ];
    wrapper = shallow(<HistoryDisplay 
      history={history} 
    />);
  });

  it('to have 5 list items', () => {
    expect(wrapper.find('li')).toHaveLength(5);
  });
});
