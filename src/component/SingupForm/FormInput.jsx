import React from "react";
import PropsTypes from 'prop-types'




const FormInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
         type={props.type}
        placeholder={props.placeholder}
        value= {props.value}
        name ={props.name}
        id = {props.name}
        onChange = {props.onChange}
        className = {props.errors ? 'form-control my-2 is-invalid'  : 'form-control my-2'}
         />
         {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
)

FormInput.propsTypes = {
    name: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    errors: PropsTypes.string,
    onChange: PropsTypes.func.isRequired,
    
}

FormInput.defualdInput = {
    type: 'text',
    placeholder: '',
    label: ''
}

export default FormInput;