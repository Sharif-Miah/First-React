import React, { Component } from "react";

// import Myform from "../folderevent/form";

import '../folderevent/elevent.style.css'


class MyEvevt extends Component{


    // state={
    //     name: '',
    //     country: '',
    //     bio: '',
    //     birthday: '',
    //     gender: '',
    //     agree: false
    // }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     });
    //     // console.log(event.target.name);
    // };

    // chackHandle = event => {
    //     this.setState({
    //         agree: event.target.checked
    //     })
    // }

    render(){
        // const  {name, country, bio, birthday, agree} = this.state
        return (
            <div className="Container">

                {/* <h1 className="my-4">Farhan Sharif</h1>

                <input className="form-control my-3" type='text' name = 'name' placeholder = 'Farhan Sharif' onChange={this.handleChange} value={name} />

                <select name="country" className="form-control my-3" onChange={this.handleChange} value = {country}>
                    <option>Chose your country</option>
                    <option value= 'Bangladesh'>Bangladesh</option>
                    <option value= 'India'>India</option>
                    <option value= 'Srilanka'>Srilanka</option>
                    <option value= 'Nepal'>Nepal</option>
                    <option value= 'China'>China</option>
                </select>

                <textarea className="form-control my-3" name="bio" placeholder="Write your Information" onChange={this.handleChange} value = {bio} ></textarea>

                <input className="form-control my-3" type='date' name = 'birthday' onChange={this.handleChange} value = {birthday}/>

                <div className="Gender">
                    <input type="radio" name = "gender" value= 'Male' onClick={this.handleChange}/>Male

                    <input type="radio" name = "gender" value= 'Female' onClick={this.handleChange}/>Female

                    <input type="radio" name = "gender" value= 'other' onClick={this.handleChange}/>Other
                </div>

                <div className="Gender">
                    <input type="checkbox" name="agree" checked={agree} onChange={this.chackHandle}/> I agree all term and condition.
                </div>

                <div className="Btn-data">
                <button className="Btn" onClick={()=> {console.log(this.state);}}>Show Data</button>
                </div> */}
                {/* <Myform/> */}
            </div>
        )
    }
}

export default MyEvevt;