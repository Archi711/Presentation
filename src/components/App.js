
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

  componentDidMount(){
    bgController(this.canvas.current)(1);
    window.addEventListener('resize', bgController(this.canvas.current));
  }
  componentDidUpdate(){
    if(this.state.bg){
      bgController(this.canvas.current)(0);
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