
import React from 'react';
import Home from './Home/Home';
import bgController from './bgController';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bg : false
    }
    this.canvas = React.createRef();
  }
  toggleBg = () => this.setState(prev =>{return { bg: !prev.bg }})


  componentDidUpdate(){
    if(this.state.bg){
      window.addEventListener('resize', bgController(this.canvas.current));
      bgController(this.canvas.current)();
    }
    else{
      bgController(this.canvas.current)(1);
    }
  }

  render(){
    const sw = this.state.bg ? 'on' : 'off';
    return(
      <React.Fragment>
        <div 
          className={`switch switch-${sw}`} 
          onClick={this.toggleBg}
        ><span role='img' aria-label='star'>⭐</span>{sw}</div>
        <canvas ref={this.canvas} className='canvas'></canvas>
        <Home/>
      </React.Fragment>
    )
  }
  
}