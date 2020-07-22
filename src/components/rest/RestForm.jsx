import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ text, method }) => (
  <>
    <input type="text" name="text" value={text}/>
    <input type="radio" name="method" value={method}/>
  </>
);

RestForm.propTypes = {
  text: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default RestForm;
