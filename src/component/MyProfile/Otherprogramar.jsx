import React, { Component } from 'react'
import Skill from './Skill';
import Links from './Links';
import Bio from './bio';

 class Otherprogramar extends Component {
  render() {
    return (
      <div>
          <div  className='Container'>
          <h3>List Of Programar:</h3>
          <Bio name='Anisa Akter Ikra' title='I am Font-end Developer' />
          <Skill SkillA= 'React' SkillB= 'Anglur' SkillC='Vue' />
          <Links SocialA='Facebook' SocialB='Youtube' SocialC='Instagram' SocialD='Fiver' />
          </div>

        <div className='Container'>
        <Bio name= 'Abdullah' title='I am Back-end Developer' />
          <Skill SkillA= 'Node.js' SkillB= 'Express.js' SkillC='MongoDB' />
          <Links SocialA='Twiter' SocialB='Instagram' SocialC='Telegram' SocialD='Massenger' />
        </div>
          
      </div>
    )
  }
}

export default Otherprogramar;

