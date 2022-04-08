import React, { Component } from 'react'
import '../SingupForm/SingForm.style.css'
import FormInput from './FormInput'


const initValues = {

    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

export class SingUpForm extends Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    changeHadle = event => {
        this.setState({
           values: {
            ...this.state.values,
            [event.target.name]: event.target.value
           }
        })
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    submitHandle = event => {
        event.preventDefault()
        const {isvalitet, errors} = this.invalited;

        if(isvalitet){
        console.log(this.state.values);
        event.target.reset();
        this.setState({values: initValues, agreement: false, errors: {}})
        }else{
            this.setState({errors})
        }
    }

     invalited = () => {
         const errors = {}

         const {values: {name, email, password, birthDate, gender}} = this.state

         if(!name){
            errors.name = 'Please provide your name'
         }

         if(!email){
            errors.email = 'Please provide your name'
         }

         if(!password){
            errors.password = 'Please provide yourpassword'
         }

         if(!birthDate){
            errors.birthDate = 'Please provide yourbirthDate'
         }

         if(!gender){
            errors.gender = 'Please select your gender'
         }

         return {
             errors,
             isvalitet: Object.keys(errors).length === 0
         }

     }

  render() {
    return (
      <div className='App'>
          <h1>My Form</h1>
          
          <FormInput 
          values = {this.state.values}
          agreement = {this.state.agreement}
          errors = {this.state.errors}
          changeHadle = {this.changeHadle}
          handleAgreement = {this.handleAgreement}
          submitHandle = {this.submitHandle}
          />
      </div>
    )
  }
}

export default SingUpForm