
import React from 'react';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';

function withFading(Component){

  const elem = props => {
    var classNames = 'page trans';
    classNames += ` ${props.direction}100`;
    props.visibility ? 
      classNames += ` ${props.direction}0` :
      classNames += '';


    return(
      <div className={classNames}>
        <Component {...props} />
      </div>
    )
  }

  return elem;
}



export default {
  Contact : withFading(Contact),
  Skills : withFading(Skills),
  About : withFading(About),
}