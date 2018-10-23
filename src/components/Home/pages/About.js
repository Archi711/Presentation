import React from 'react';
import Sender from '../UI/Sender';
import arr from '../../../assets/arrr.png';

const ScrollHint = props => (
  <div className='scroll-hint'>
    <img src={arr} className='navArrow' alt='arrow-hint-scroll' />
  </div>
)
export default props => {

  return (
    <React.Fragment>
      <div className='page-container'>
        <div className='page-heading'>About me</div>
        <div className='about-flex'>
          <div className='about-p'>
            My name is Arek Chwedczuk
            I'm currently living in Wrocław. 
            3 years ago I had to learn BATCH for classes.
            I liked it. Really.
            Now I'm still learning programming.
            I hope it will be even more useful than BATCH.
            I'm focusing on JS now and a bit on front-end works.
            I love creating - that's why I program.
            I like doing by job well - sometimes it takes hours of my life.
          
          </div>
          <ScrollHint/>
          <div className='about-p '>
            I'm opened for any propositions. 
            My lack of any commercial experience was caused by my school.
            Now I'm external student, so... 
            <div className='about-m'>
              I'm here! 
              I want get my first experience,
              and not to disappoint anyone, including me.
            </div>
          </div>
          <div className='about-p'>
            Thank You for your time.
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