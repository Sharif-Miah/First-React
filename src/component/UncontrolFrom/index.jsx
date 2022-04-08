import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'

export class UncontrolFrom extends Component {

    handleSubmit = event => {
        event.preventDefault()
        const data = {}

        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(data);
        event.target.reset();

    }

  render() {
    return (
      <div className='From'>
          <h1>UncontrolFrom</h1>
          <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder='Write your Text' className='form-control my-3' name='name'/>

          <input type="email" placeholder='Write your Email' className='form-control my-3' name='email'/>

          <input type="password" placeholder='********' className='form-control my-3' name='password'/>

          <button className='Btn'>Submit</button>

          </form>
      </div>
    )
  }
}

export default UncontrolFrom;