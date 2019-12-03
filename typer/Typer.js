import * as React from 'react';
import './typer.css'

const Typer = ({text}) => {
  return (
    <div>
    <p className="line-1 anim-typewriter">
      {text}
    </p>
    </div>
  )
}

export default Typer;