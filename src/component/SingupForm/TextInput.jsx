import React from "react";
import FormInput from "./FormInput";
import PropTypes from 'prop-types';


const TextInput = ({
    values,
    agreement,
    handleChange,
    handleAgreement,
    handleSunmit,
    errors
}) => {
    return(
        <div>
            <form onSubmit={handleSunmit}>
                <FormInput 
                name = "name"
                label = 'Write your name'
                placeholdder = 'Writr your name'
                value = {values.name}
                errors = {errors.name}
                onChange = {handleChange}
                 />

                <FormInput 
                name = "email"
                type = 'email'
                label = 'Writ your email'
                placeholdder = 'Write your email'
                value = {values.email}
                errors = {errors.email}
                onChange = {handleChange}
                 />

                <FormInput 
                name = "password"
                type = 'password'
                label = 'Write your password'
                placeholder = "*******"
                value = {values.password}
                errors = {errors.password}
                onChange = {handleChange}
                 />

                <FormInput 
                name = "birthDate"
                type='date'
                label = 'Write your birthday'
                value = {values.birthDate}
                errors = {errors.birthDate}
                onChange = {handleChange}
                 />


                <div className="form-group">

                    <label className="mr-4">
                        <input
                        type="radio"
                        name="gender"
                        value= 'male'
                        onChange = {handleChange}
                        className = 'form'
                         />
                         Male
                    </label>

                    <label className="my-4">
                        <input
                        type="radio"
                        name="gender"
                        value= 'female'
                        onChange = {handleChange}
                        className = 'form'
                         />Female
                    </label>

                    <label className="my-4">
                        <input
                        type="radio"
                        name="gender"
                        value= 'other'
                        onChange = {handleChange}
                        className = 'form'
                         />Other
                    </label>
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>

                <div className="form-group">
                    <label>
                        <input 
                        type="checkbox"
                        className="form-group mr-4 Agree"
                        name="agreement"
                        checked={agreement}
                        onChange={handleAgreement}
                        
                         /> I agree all Terms and condition
                    </label>
                </div>



            <button
             className="btn btn-primary"
            type="submit"
            disabled={!agreement}
            >
                Create User
            </button>


            </form>
        </div>
    )
}

TextInput.propTypes ={
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSunmit: PropTypes.func.isRequired
}


export default TextInput;