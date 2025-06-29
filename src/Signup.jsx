import { Link } from "react-router-dom";
import { useState } from "react";
import { SignupValidation } from "./SignupValidation";
import logo from './assets/icon.png';
import React from 'react';
import { Store } from './Store';


export function Signup() {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        unicid: Date.now()
    })
    const [singupError, setSignupError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignupError(SignupValidation(signupData));
        if (username.length && email.length && password.length === 0 && SignupValidation.error) {
            return;
        } else {
            Store(signupData);
        }

    }


    return (
        <>
            <div className="signup-wrapper">
                <div className="signup-content">
                    <div className="logo">
                        <span className="icon"> <img src={logo} alt="" /></span>
                        <span className="logo-text">TaskZen</span>
                    </div>
                    <h3 className="sec-header text-algin-center">Signup</h3>
                    <form>
                        <div className="margin-bottom-12">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" className="form-control" onChange={handleChange} required />
                            {singupError.username && <span className="error-text">{singupError.username}</span>}
                        </div>
                        <div className="margin-bottom-12">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required className="form-control" onChange={handleChange} />
                            {singupError.email && <span className="error-text">{singupError.email}</span>}

                        </div>
                        <div className="margin-bottom-12">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" className="form-control" required onChange={handleChange} />
                            {singupError.password && <span className="error-text">{singupError.password}</span>}

                        </div>
                        <button type="submit" className="btn-1" onClick={handleSubmit}>Signup</button>
                        <p>You are a member? <Link to="/login" className="hilight">Login Now</Link> </p>
                    </form>
                </div>

            </div>

        </>
    );
}