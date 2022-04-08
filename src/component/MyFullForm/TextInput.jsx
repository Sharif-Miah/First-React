import React from "react";
import PropsTypes from 'prop-types'

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
         type={props.type}
         name= {props.name}
         id = {props.name}
         placeholder = {props.placeholder}
         value = {props.value}
         onChange = {props.onChange}
         className = {props.errors ? 'form-control my-3 is-invalited' : 'form-control my-3'}
         />
         {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
)

TextInput.propTypes = {
    name: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    errors: PropsTypes.string
}

TextInput.defauldInput = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput;