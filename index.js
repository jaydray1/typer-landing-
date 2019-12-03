import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components'
import './style.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Detail = styled.p`  
  font-size: 20px;
  text-align: center; 
  width: 50%;
`;

const Banner = styled.h1`
  font-size: 3em;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 5em;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Jon-Michael J. Dreher',
      detail: 'I\'ve been working as a Software Developer with a focus on front end development for the last 2+ years.'
    };
  }

  render() {
    return (
      <Container>
        <Banner>{this.state.text}</Banner>
        <Detail className="detail">{this.state.detail}</Detail>
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
