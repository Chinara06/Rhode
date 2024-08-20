import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth";

const Login = () => {
    const [userL, setUserL] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        setUserL({ ...userL, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Сброс ошибки перед новой попыткой

        try {
            const resultAction = await dispatch(login(userL)).unwrap();
            if (resultAction) {
                navigate('/');
            }
        } catch (error) {
            setErrorMessage("Login failed. Please check your email and password.");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="login">
            <form onSubmit={(e) => onSubmit(e)} className="register__form">
                <div className="register__row">
                    <h3 className="register__title">Login</h3>
                    <div className="register__row-card">
                        <input
                            name="email"
                            onChange={(e) => onChange(e)}
                            placeholder="Email"
                            className="register__input"
                            type="email"
                            autocomplete="email"
                        />
                        <input
                            name="password"
                            onChange={(e) => onChange(e)}
                            placeholder="Password"
                            className="register__input"
                            type="password"
                            autocomplete="current-password"
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="register__submit" type="submit" style={{cursor: "pointer"}}>
                            SIGN IN
                        </button>
                        <p className="register__sing">Forgot your password?</p>
                        <Link to="/register">
                            <p className="register__sing">
                                Don't have an account? <span>Sign up</span>!
                            </p>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;