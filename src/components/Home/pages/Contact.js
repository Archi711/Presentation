import React from 'react';
import Sender from '../UI/Sender';


export default props => {
  
  return (
    <React.Fragment>
      <Sender 
        onClick={props.back('contact')('/')}
        position='top'>Home</Sender>
      <div className='page-container'>
        <div className='page-heading'>Contact me:</div>
        
        <div className='cred'>email: chwedczukarek@gmail.com</div>
        <div className='cred'>phone: +48 797 211 002</div>
        <div className='contact-links'>
          <div className='cred contact-link'>
            <a href='https://github.com/Archi711'>Github</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}