import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, id }) => {
  return (
    <>
      <section id={id}>
        <p id={id}>{method}</p>
        <span id={id}>{url}</span> 
      </section>
    </>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  id: PropTypes.string

};

export default HistoryItem;
