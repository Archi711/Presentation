
import React from 'react';
import * as _ from 'lodash';

import Greeting from './Greeting'
import pages from './pages/pages';
import Sender from './UI/Sender';
import NotFound from './Not-Found'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage : _.tail(window.location.pathname).join(''),
      history : ['/'],
      routes : ['/', '/contact', '/about', '/skills'],
    }
    window.onpopstate = ev => {
      ev.preventDefault();
      const his = this.state.history;
      const to = ev.state ? 
      ev.state.to :
      _.slice(his, his.length-2, his.length-1).join(''); 
      ev.state ? 
        this.changePage(this.state.activePage)(to)('add') : 
        this.changePage(this.state.activePage)(to)('add');
    }
  }

  changePage = (from) => (to) => (addToHistory) => {
    console.info(`FROM : ${from} TO : ${to}, add? : ${addToHistory}`);
    if (addToHistory !== 'add') {console.log('PUSH'); window.history.pushState({to}, to, to);}
    this.setState(prev => {
      return {
        activePage: to,
        history: prev.history.concat([to])
      }
    });
  }
  getClassnames(){
    var position = '';
    switch(this.state.activePage){
      case 'about' : position = 'r100'; break;
      case 'contact' : position = 't100'; break;
      case 'skills' : position = 'l100'; break;
      case '' : break;
      default : break;
    }
    return `home trans ${position}`
  }
  checkURL = () => _.reduce(this.state.routes, (acc, curr) => acc ? acc : curr === window.location.pathname, false);

  render(){
    if(this.checkURL()){
      return (
        <React.Fragment>
          <div className={this.getClassnames()}>
            <Greeting></Greeting>
            <Sender
              onClick={this.changePage('/')('about')}
              position='left'>
              About me
            </Sender>
            <Sender
              onClick={this.changePage('/')('contact')}
              position='bottom'>
              Contact
            </Sender>
            <Sender
              onClick={this.changePage('/')('skills')}
              position='right'>
              My skills
            </Sender>
          </div>
          <pages.Contact 
            direction={'b'} 
            visibility={this.state.activePage === 'contact'}
            back={this.changePage}/>
          <pages.Skills 
            direction={'r'} 
            visibility={this.state.activePage === 'skills'}
            back={this.changePage}/>
          <pages.About 
            direction={'l'} 
            visibility={this.state.activePage === 'about'}
            back={this.changePage}/>
            
        </React.Fragment>
      )
    }
    else {
      return <NotFound redirect={this.changePage} />
    }
  }
}