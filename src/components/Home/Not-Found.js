import React from 'react';

export default props => {
  return (
    <React.Fragment>
      <div className='404'>Error 404 - Page not found</div>
      <div className='btn back' onClick={props.redirect('404')('/')}>Go to <code>Home</code></div>
    </React.Fragment>
  )
}