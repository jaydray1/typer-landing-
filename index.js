import React, { Component } from 'react';
import { render } from 'react-dom';
import Typer from './typer/Typer';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hi, my name is Jon-Michael.'
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
