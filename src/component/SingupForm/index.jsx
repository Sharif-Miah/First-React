import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import '../SingupForm/SingForm.style.css'

const initValues  = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

export class SingupForm extends Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
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

    handleSunmit = event => {
        event.preventDefault()
        const {isvalited, errors} = this.valitit()

        if(isvalited){
        this.props.createUser(this.state.values);
        event.target.reset();
        this.setState({values: initValues, agreement: false, errors: {}})
        }else{
            this.setState({errors})
        }
    }


    valitit = () => {
       const  errors = {}
       const {values: {name, email, password, birthDate, gender}} = this.state

        if(!name){
            errors.name = 'Please provide your name'
        }

        if(!email){
            errors.email = 'Please provide your email'
        }

        if(!password){
            errors.password = 'Please provide your password'
        }

        if(!birthDate){
            errors.birthDate = 'Please provide your birthDate'
        }

        if(!gender){
            errors.gender = 'Please Select your gender'
        }

        return  {
            errors,
            isvalited: Object.keys(errors).length === 0
        }

    }

  render() {
    return (
      <div className='App'>
          <h1>SingupForm</h1>
          <TextInput 
          values={this.state.values}
          errors={this.state.errors}
          agreement ={this.state.agreement}
          handleChange = {this.handleChange}
          handleAgreement= {this.handleAgreement}
          handleSunmit = {this.handleSunmit}
           />
      </div>
    )
  }
}


SingupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SingupForm;