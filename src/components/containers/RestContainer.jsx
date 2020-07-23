import React, { Component } from 'react';
import { fetchAPI } from '../../services/fetchAPI';
import RestForm from '../rest/RestForm';
import RestDisplay from '../rest/restDisplay';

export default class RestContainer extends Component {
    state={
      URL: '', 
      method: '',
      body: '',
      display: { 'working':'Nothing to see here!' },
      history: []

    }
    handleChange =({ target }) => {
      this.setState({ [target.name]: target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const { URL, method, body } = this.state;
      // console.log(URL, 'LJFLJSDLFJ:LJKD');
      fetchAPI(URL, method, body)
      //   .then(item => console.log(item));
        .then(display => this.setState({ display }));
    }

    
    render() {
      const { URL, method, body, display } = this.state;
      return (
        <div>
          <RestForm URL={URL} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit} body={body}/>
          <RestDisplay display={display} />
        </div>
      );
    }
}
