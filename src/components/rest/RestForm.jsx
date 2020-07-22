import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ URL, method }) => (
  <form>
    <input type="text" name="text" value={URL}/>
    <label>
      <input type="radio" name="method" value="GET" checked={method === 'GET'}/>
        GET
    </label>
    <label>
      <input type="radio" name="method" value="PUT" checked={method === 'PUT'}/>
        PUT
    </label>
    <label>
      <input type="radio" name="method" value="POST" checked={method === 'POST'}/>
        POST
    </label>
    <label>
      <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'}/>
        DELETE
    </label>
  </form>
);

RestForm.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default RestForm;
