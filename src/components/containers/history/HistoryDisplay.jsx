import React from 'react';
import PropTypes from 'prop-types';

const HistoryDisplay = ({ history }) => {
  const historyElement = history.map(page => (
    <li key={Date.now()}>
      {page.url}
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
    body: PropTypes.string
  })).isRequired
};

export default HistoryDisplay;
