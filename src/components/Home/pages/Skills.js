import React from 'react';
import Sender from '../UI/Sender';

class Skill{
  constructor(n,c){
    this.name = n;
    this.color = c;
  }
}

var skills = [];
skills.push(new Skill('HTML', '#FFA500'));
skills.push(new Skill('CSS', '#286CE9'));
skills.push(new Skill('JS', '#F0DB4f'));
skills.push(new Skill('Angular5', '#b52e31'));
skills.push(new Skill('React', '#00D8FF'));
skills.push(new Skill('English : B2','#00ba4B'));
skills.push(new Skill('webpack', '#499aba'));
skills.push(new Skill('git', '#543443'));



export default props => {

  return (
    <React.Fragment>
      <div className='page-container'>
        <div className='page-heading'>My skills:</div>
        <div className='skills-container'>
          {
            skills.map(
              (el) => {
                return (
                <div 
                  style={{backgroundColor : el.color}}
                  className='card'
                  key={el.name}>
                  {el.name}
                </div>)
            })
          }
        </div>
        <div className='skills-add'></div>
      </div>
      <Sender 
        onClick={props.back('skills')('/')}
        position='left'>
        Home
      </Sender>
    </React.Fragment>
  )
}

