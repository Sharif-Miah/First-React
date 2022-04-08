// import { Component } from "react";
import React, {Component} from "react";
import '../folderevent/elevent.style.css'

class Myform extends  Component{

    state={
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    termsCondition = event => {
        this.setState({
            agree: event.target.checked
        })
    } 

    handleSkillChange = event =>{
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            });
        }else{
             const skills = this.state.skills.filter(skill => skill !== event.target.value)
             this.setState({skills})
        }
    }

render(){
    const {name, country, bio, birthday, agree, skills} = this.state

    return(
        <div className="Container">
            <h1>Hello Every One</h1>
            <div>
                <input className="form-control my-3" type="text" placeholder="Write your text" name="name" value= {name} onChange={this.handleChange}/>

                <select name="country" value={country} className="form-control my-3" onChange={this.handleChange}>
                    <option>Select your country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Brazil">BraZil</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </select>

                <textarea name="bio" value={bio} placeholder = 'Write your text' className="form-control my-3" onChange={this.handleChange}></textarea>

                <input type="date" className="form-control my-3" name='birthday' value={birthday} onChange={this.handleChange}/>

                <div className="Gender">
                    <input type="radio" name="gender" value= 'Male' onClick={this.handleChange}/>Male
                    <input type="radio" name="gender" value= 'Female' onClick={this.handleChange}/>Female
                    <input type="radio" name="gender" value= 'Other' onClick={this.handleChange}/>Other
                </div>
                
                <div className="Gender">
                    Skills: <br />
                    <input type="checkbox" name="skills" value='Java' checked={skills.includes('Java')} onChange={this.handleSkillChange}/>Java

                    <input type="checkbox" name="skills" value='Javascript' checked={skills.includes('Javascript')} onChange={this.handleSkillChange}/>Javascript

                    <input type="checkbox" name="skills" value='Python' checked={skills.includes('Python')} onChange={this.handleSkillChange}/>Python

                    <input type="checkbox" name="skills" value='GoLang' checked={skills.includes('GoLang')} onChange={this.handleSkillChange}/>GoLang

                    <input type="checkbox" name="skills" value='PHP' checked={skills.includes('PHP')} onChange={this.handleSkillChange}/>PHP

                </div>

                <div className="Gender">
                    <input type="checkbox" name="agree" checked={agree} onChange={this.termsCondition}/> I agree all Condition and Terms
                </div>



                <div className="Btn-data">
                    <button className="Btn" onClick={()=>{console.log(this.state);}}>Show Data</button>
                </div>
            </div>
        </div>
    )
}
}

export default Myform;