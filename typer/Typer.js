import * as React from 'react';
import './typer.css'

const Typer = ({text}) => {
  return (
    <div>
      <div className="typewriter">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Typer;