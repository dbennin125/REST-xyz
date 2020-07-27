import React, { Component } from 'react';
import  fetchAPI from '../../services/fetchAPI';
import RestForm from '../rest/RestForm';
import RestDisplay from '../rest/RestDisplay';
import HistoryDisplay from './history/HistoryDisplay';


export default class RestContainer extends Component {
    state={
      url: '', 
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
      const { url, method, body, history } = this.state;
      
      // if(history.id === method + url) {
      //   return !history;
      // }
    
      // console.log(url, 'LJFLJSDLFJ:LJKD');
      fetchAPI(url, method, body)
        //   .then(item => console.log(item));
        .then(display => this.setState({ display }));
      this.setState({ history: [...history, { url, method }] });
    }
 
    render() {
      const { url, method, body, display, history } = this.state;
      return (
        <div>
          <RestForm URL={url} 
            method={method}
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit}
            body={body}
          />
          <RestDisplay display={display} />
          <HistoryDisplay history={history}/>
        </div>
      );
    }
}
