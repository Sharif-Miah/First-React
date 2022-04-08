import React from "react";
import PropTypes from 'prop-types'
import TextInput from "./textInput";

const MyForm = props => (
    <form onSubmit={props.clickSubmit}>

    <TextInput 
    name='name'
    label='Enter your name'
    placeholder='write your name'
    value={props.values.name}
    onChange={props.handleClick}
     />

    <TextInput 
    name='email'
    type='email'
    label='Enter your Email'
    placeholder='write your Email'
    value={props.values.email}
    onChange={props.handleClick}
     />

    <TextInput 
    name='password'
    type='password'
    label='Enter your Password'
    placeholder='write your password'
    value={props.values.password}
    onChange={props.handleClick}
     />

    <button className='Btn'  type='submit'  >Submit</button>

    </form>
)
   
MyForm.propTypes = {
    values: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    clickSubmit: PropTypes.func.isRequired
}

export default MyForm;