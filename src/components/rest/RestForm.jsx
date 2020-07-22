import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ text }) => (
  <input type="text" name="text" value={text}/>
);

RestForm.propTypes = {
  text: PropTypes.string.isRequired
};

export default RestForm;
