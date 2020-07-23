import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

const RestDisplay = ({ display }) => {
  return (
    <>
      <div>
        <ReactJson src={display}  />
      </div>
    </>
  );
};

RestDisplay.propTypes = {
  display: PropTypes.any.isRequired
};

export default RestDisplay;
