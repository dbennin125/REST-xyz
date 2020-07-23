import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ URL, method, onChange, onSubmit, body }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="URL" value={URL} onChange={onChange}/>
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
    <button>Submit button</button>
    <textarea name="body" value={body} onChange={onChange} />
  </form>
);

RestForm.propTypes = {
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string
};

export default RestForm;
