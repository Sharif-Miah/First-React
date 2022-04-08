import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'

export class InputType extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChack = event => {
      this.setState({
        agree: event.target.checked
      })
    }

    changeSkill = event => {
     if(event.target.checked){
      this.setState({
        skills: [...this.state.skills, event.target.value]
      })
     }else{
       const skills = this.state.skills.filter(skill => skill !== event.target.value)
       this.setState({skills})
     }
    }

  render() {
      const  {name, country, bio, birthDay, agree, skills} = this.state
    return (
      <div className='From'>
          <h1>Form Input</h1>
            <div>
                <input type="text"  className='form-control my-3' placeholder='Write your name' name = 'name' value={name} onChange={this.handleChange}/>

                <select name="country" className='form-control my-3' value={country} onChange={this.handleChange}>
                    <option>Chose your country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Srilanka">Srilanka</option>
                      <option value="U.S.A">U.S.A</option>
                      <option value="England">England</option>
                      <option value="Germany">Germany</option>
                </select>

              <textarea name="bio" className='form-control my-3 py-3' placeholder='Write your Text' value={bio} onChange={this.handleChange}></textarea>

              <input type="date" className='form-control my-3' value={birthDay} onChange ={this.handleChange} name='birthDay'/>

              <div>
                  <input type="radio" name = 'gender' value='male' onChange = {this.handleChange} /> Male
                  <input type="radio" name = 'gender' value='female' onChange = {this.handleChange} /> female
                  <input type="radio" name = 'gender' value='other' onChange = {this.handleChange} /> Other
              </div>

              <div>
                Skills:
                <br />
                <input type="checkbox" value='Java' name='skills' checked = {skills.includes('Java')} onChange={this.changeSkill} /> Java

                <input type="checkbox" value='Javascript' name='skills' checked = {skills.includes('Javascript')} onChange={this.changeSkill} /> Javascript

                <input type="checkbox" value='Python' name='skills' checked = {skills.includes('Python')} onChange={this.changeSkill} /> Python

                <input type="checkbox" value='GoLang' name='skills' checked = {skills.includes('GoLang')} onChange={this.changeSkill} /> GoLang

                <input type="checkbox" value='PHP' name='skills' checked = {skills.includes('PHP')} onChange={this.changeSkill} /> PHP

              </div>

              <div>
                <input type="checkbox" name='agree' value={agree} checked= {agree} onChange={this.handleChack} /> I agree all Terms and Condition.
              </div>
              
                <div>
                  
                    <button className='Btn' onClick={()=>{console.log(this.state);}}>Show Data</button>
                </div>
            </div>
      </div>
    )
  }
}

export default InputType