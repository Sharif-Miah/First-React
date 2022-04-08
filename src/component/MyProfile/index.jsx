import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'
import Bio from './bio'
import Links from './Links'
import Skill from './Skill'


class MyProfile extends Component {

    me = {
        name: 'Farhan Sharif',
        title: 'I am Joniur Javascript Developer.',
        SkillA: 'Java',
        SkillB: 'Javascript',
        SkillC: 'Python',
        SocialA: 'Facebook',
        SocialB: 'Twittar',
        SocialC: 'Linkdin',
        SocialD: 'Github'
    }

  render() {
    return (
      <div className='Container'>
          <Bio name={this.me.name} title={this.me.title}/>

          <Skill SkillA={this.me.SkillA} SkillB={this.me.SkillB} SkillC={this.me.SkillC}/>

          <Links  SocialA={this.me.SocialA} SocialB={this.me.SocialB} SocialC={this.me.SocialC} SocialD={this.me.SocialD} />
      </div>
    )
  }
}

export default MyProfile