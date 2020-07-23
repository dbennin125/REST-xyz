import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body }) => {
  return (
    <>
      <p>{url}, {method}, {body}</p>  
    </>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string

};

export default HistoryItem;
