import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';


const HistoryDisplay = ({ history }) => {
  const historyElement = history.map(page => (
    <li key={Date.now()}>
      <HistoryItem 
        url={page.url} 
        method={page.method} 
        id={`${page.method} + ${page.url}}`}
      />
    </li>
  ));
  return  (
    <ul>
      {historyElement}
    </ul>
  );
};

HistoryDisplay.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired, 
    method: PropTypes.string.isRequired,
  }).isRequired
  )
};

export default HistoryDisplay;
