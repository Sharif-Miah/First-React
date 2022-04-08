import React, {Component} from "react";

class HandleEvent extends Component{

      state ={
    name: ''
  }

  handleClick = (event) => {
    console.log('I am a little cute Button.');
  }

  handleChange = event => {
    this.setState({name: event.target.value})
  }

 handleFocas = event => {
   console.log('This is focus Event.');
 }

handleBlur = event => {
  if(!this.state.name){
    alert('Plese Entre write text.')
  }
  console.log('I am blur Event.');
}

    redner(){
        return(
            <div>
                <div className="Container">
        <h1 className="Heading">Hello Farhan Sharif</h1>
        <button className="Btn" onClick={this.handleClick}>Click Here</button>
        <br />
        <input type= 'text' placeholder ='Enter your text' onChange={this.handleChange} value = {this.state.value} onFocus = {this.handleFocas} onBlur = {this.handleBlur} />

        {this.state.name && <h2>Welcome, {this.state.name}</h2>}
        </div>
            </div>
        )
    }
}


export default HandleEvent;