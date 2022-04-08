import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'
import MyForm from './myForm'






export class ControlFrom extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

handleClick = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

clickSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    event.target.reset();
    this.setState({name: '', email: '', password: ''})
}


  render() {

    return (
        <div className='From'>
        <h1>ControlFrom</h1>
        <MyForm 
        values={this.state}
        handleClick = {this.handleClick}
        clickSubmit = {this.clickSubmit}
         />
    </div>
    )
  }
}

export default ControlFrom;