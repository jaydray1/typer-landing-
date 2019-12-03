import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Typer from './typer/Typer';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'My name is Jon-Michael, great to meet you :)'
    };
  }

  render() {
    return (
      <div>
        <Typer text={this.state.text} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
