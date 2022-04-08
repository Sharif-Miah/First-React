import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'

 class Event extends Component {

  state = {
    name: '',
  }

  changeFocus = (event)=> {
    console.log('I am a Focus');
  }

  changeBlur = event => {
    if(!this.state.name){
      alert('Plese Write Your Text')
    }
    console.log('I am Blur Event')
  }

 changeHandel = (event)=> {
   this.setState({
     name: event.target.value
   })
 }

  render() {
    return (
      <div className='Event'>
          <h1>Input Type</h1>
         <div>
           <input type="text" placeholder='Write your text' className='form-control' onChange={this.changeHandel} value = {this.state.name}
           onFocus = {this.changeFocus}
           onBlur = {this.changeBlur}
           />
           
         </div>
         <br />
         <br />
         {this.state.name && <h4>Welcome, {this.state.name}</h4>}
      </div>
    )
  }
}

export default Event;