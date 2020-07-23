import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, id }) => {
  return (
    <>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span> 
    </>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  id: PropTypes.string

};

export default HistoryItem;
