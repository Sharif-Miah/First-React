
import React, {Component} from "react";
import SingUpForm from "./MyFullForm";


// import MyState from "./state";
// import MyEvevt from "./folderevent";
// import Myform from "./folderevent/form";
// import UncontrolForm from "./folderevent/uncontrolform";
// import FormInput from "./folderevent/form";
// import MyProfile from "./MyProfile";
// import Otherprogramar from "./MyProfile/Otherprogramar";
// import Timer from "./Timer/Timer";
// import Event from "./event";
// import InputType from "./Form";
// import UncontrolFrom from "./UncontrolFrom";
// import ControlFrom from "./ControlForm";
// import SingupForm from './SingupForm/index'



class App extends Component{

  // state = {
  //   users: []
  // }

  // createUser = user => {
  //   user.id = new Date().getTime().toString()
  //   this.setState({
  //     users: [...this.state.users, user]
  //   })
  // }

//   state ={
//     name: ''
//   }

//   handleClick = (event) => {
//     console.log('I am a little cute Button.');
//   }

//   handleChange = event => {
//     this.setState({name: event.target.value})
//   }

//  handleFocas = event => {
//    console.log('This is focus Event.');
//  }

// handleBlur = event => {
//   if(!this.state.name){
//     alert('Plese Entre write text.')
//   }
//   console.log('I am blur Event.');
// }

  render(){
    return (
      <div>
        {/* <MyState/> */}
        {/* <MyEvevt/> */}
        {/* <Myform/> */}
        {/* <UncontrolForm/> */}
        {/* <div className="Container">
        <h1 className="Heading">Hello Farhan Sharif</h1>
        <button className="Btn" onClick={this.handleClick}>Click Here</button>
        <br />
        <input type= 'text' placeholder ='Enter your text' onChange={this.handleChange} value = {this.state.value} onFocus = {this.handleFocas} onBlur = {this.handleBlur} />

        {this.state.name && <h2>Welcome, {this.state.name}</h2>}
        </div> */}
        {/* <MyProfile/> */}
        {/* <Otherprogramar/> */}
        {/* <Timer /> */}
        {/* <Event/> */}
        {/* <InputType/> */}
        {/* <UncontrolFrom/> */}
        {/* <ControlFrom/> */}
        {/* <SingupForm createUser = {this.createUser} /> */}
        <SingUpForm/>

        {/* <div className="App">
          <h2 className="my-5">All Regesters Users</h2>
          <ul className="list-group">
          {this.state.users.map(user => (<li key={user.id} className = 'list-group-item'>
            {user.name} = {user.email}
          </li>))}
          </ul>
        </div> */}

      </div>
    )
  }
}

export default App;
