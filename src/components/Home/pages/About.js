import React from 'react';
import Sender from '../UI/Sender';


export default props => {

  return (
    <React.Fragment>
      <div className='page-container'>
        <div className='page-heading'>About me</div>
        <div className='about-flex'>
          <div className='about-p'>
            My name is Arek Chwedczuk
            I'm living Wrocław. 
            3 years ago I had to learn BATCH for classes.
            I liked it. Really.
            Now I'm still learning programming.
            I hope it will be even more useful than BATCH.
            I'm concentrating on JS now, and a bit front-end works.
            I love creating - that's why I program.
            I like doing by job well - sometimes it takes hours of my life.
          
          </div>
          <div className='about-p '>
            I'm opened for any propositions. 
            My lack of any commercial experience was caused by my school.
            Now my studies are not taking 90% of my time, so... 
            <div className='about-m'>
              I'm here! 
              I want get my first experience,
              and not disappoint myself.
            </div>
          </div>
          <div className='about-p'>
            Thanks for your time.
          </div>
        </div>
      </div>
      <Sender 
        onClick={props.back('about')('/')}
        position='right'>
        Home
      </Sender>
    </React.Fragment>
  )
}