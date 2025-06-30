import { Link } from "react-router-dom"
import { useState } from "react"
import { loginValidation } from "./loginValidation";
import logo from './assets/icon.png';
import { findLoginUser } from "./utilities";

export function Login() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError(loginValidation(loginData));

        const { success, user, error } = findLoginUser(loginData);

        if (success) {
            console.log('test')
            localStorage.setItem("loggedInUser", JSON.stringify(user));
        } else {
            setLoginError(error);
            alert('You are not a member plase sinup')
        }
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-content">
                    <div className="logo">
                        <span className="icon"> <img src={logo} alt="" /></span>
                        <span className="logo-text">TaskZen</span>
                    </div>
                    <h3 className="sec-header text-algin-center">Login Your Account</h3>
                    <form>
                        <div className="margin-bottom-12">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="form-control" onChange={handleChange} required />
                            {loginError.email && <span className="error-text">{loginError.email}</span>}
                        </div>
                        <div className="margin-bottom-12">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required className="form-control" onChange={handleChange} />
                            {loginError.password && <span className="error-text">{loginError.password}</span>}
                        </div>
                        <button className="btn-1" type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                    <a href="#" className="hilight forget-btn">Forget Password</a>

                    <p>Not a member? <Link to="/signup" className="hilight ">Signup Now</Link> </p>
                </div>

            </div>
        </>
    )
}