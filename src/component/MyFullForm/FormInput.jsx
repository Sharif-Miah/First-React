import React from "react";
import TextInput from "./TextInput";
import PropTypes from 'prop-types'

const FormInput = props => ({
    values,
    agreement,
    changeHadle,
    handleAgreement,
    submitHandle,
    errors
}) => {
    return(
        <div>
            <form onSubmit={submitHandle}>
                <TextInput 
                name="name"
                label="Write your name"
                placeholder="write your name"
                value={values.name}
                onChange = {changeHadle}
                errors = {errors.name}
                />

                <TextInput 
                name="email"
                type="email"
                label="Write your email"
                placeholder="write your email"
                value={values.email}
                onChange = {changeHadle}
                errors = {errors.email}

                />

                <TextInput 
                name="password"
                type="password"
                label="Write your password"
                placeholder="write your password"
                value={values.password}
                onChange = {changeHadle}
                errors = {errors.password}
                />

                <TextInput 
                name="birthDate"
                type="date"
                label="Write your bithday"
                value={values.password}
                onChange = {changeHadle}
                errors = {errors.password}
                />

                <div className="form-group">
                    <label className="mr-4">
                        <input
                         type="radio"
                         name="gender"
                         value='male'
                         onChange={changeHadle}
                          />Male
                    </label>
                    <label className="mr-4">
                        <input
                         type="radio"
                         name="gender"
                         value='female'
                         onChange={changeHadle}
                          />Female
                    </label>
                    <label className="mr-4">
                        <input
                         type="radio"
                         name="gender"
                         value='other'
                         onChange={changeHadle}
                          />Other
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <input 
                        type="checkbox" 
                        name="agreement"
                        checked={agreement}
                        className = 'form-group'
                        onChange={handleAgreement}
                         /> I Agree All Terms and Condition. 
                    </label>
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>

                <button 
                className="btn btn-primary"
                type="submit"
                disabled = {!agreement}
                >
                    Create Users
                </button>

            </form>
        </div>
    )
}

FormInput.PropTypes = {
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    submitHandle: PropTypes.func.isRequired,
    changeHadle: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,


}

export default FormInput;