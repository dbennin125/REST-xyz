import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

const restDisplay = ({ display }) => {
  return (
    <div>
      <ReactJson src={display} />
    </div>
  );
};

restDisplay.propTypes = {
  display: PropTypes.array
};

export default restDisplay;
