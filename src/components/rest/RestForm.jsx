import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ URL, method, onChange }) => (
  <form>
    <input type="text" name="text" value={URL} onChange={onChange}/>
    <label>
      <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange}/>
        GET
    </label>
    <label>
      <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange}/>
        PUT
    </label>
    <label>
      <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange}/>
        POST
    </label>
    <label>
      <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange}/>
        DELETE
    </label>
  </form>
);

RestForm.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RestForm;
