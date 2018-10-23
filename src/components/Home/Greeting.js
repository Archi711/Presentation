import React from 'react';

export default props => {

  return (
    <React.Fragment>
      <div className='greetContainer'>
        <div className='greet'>
          <div className='text-in'>Hello!</div>
          <div className='greet-s text-in'>I'm Arek, junior webdeveloper</div>
        </div>
        <div className='text-in descript greet-l'>Actually I'm looking for my first job...</div>
        <div className='text-in descript greet-l'>For more information check those fancy arrows on sides!</div>
        <div className='text-in copyright'>Done with sugar superpowers by <a href='https://www.facebook.com/arek.chwedczuk'>me</a>.</div>
      </div>

    </React.Fragment>
  )
}