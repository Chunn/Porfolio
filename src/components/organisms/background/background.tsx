import React from 'react';
import { mapModifiers } from 'lib/component';
import logo from 'assets/images/mylogo-2.png';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const Background: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('o-background', props.modifiers)}>
      <div className="o-background_boxarea">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="m-logo">
        <div className="a-text">
          <p>
            Nga <br /> Nguyen
          </p>
          <p>Portfolio</p>
        </div>
        <div className="a-img">
          <img src={logo} />
        </div>
      </div>
      {props.children}
    </div>
  );
};
