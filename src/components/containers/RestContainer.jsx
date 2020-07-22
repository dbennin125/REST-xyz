import React, { Component } from 'react';

export default class RestContainer extends Component {
    state={
      URL: '', 
      method: '',
      body: '',
      display: { 'working':'Nothing to see here!' }

    }
    
    render() {
      return (
        <div>
          <h1>Work in progress</h1>  
        </div>
      );
    }
}
