import React from 'react';
import arrowpng from '../../../assets/arrr.png';

export default props => {
  const classNames = `sender trans sender-${props.position}`
  const arrowCl = `navArrow navArrow-${props.position}`;
  const arrow = <img src={arrowpng} className={arrowCl} alt='navArrow' />
  return <div
    className={classNames}
    onClick={props.onClick}>
    <span 
      b={props.children} 
      className={`lighten trans lighten-${props.position}`}>{arrow}</span>
    </div>
}
