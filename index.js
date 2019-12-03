import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Jon-Michael J. Dreher'
    };
  }

  render() {
    return (
      <div>
        <h1 style={{color: 'white'}}>{this.state.text}</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
