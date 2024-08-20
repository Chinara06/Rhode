import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
 import { v4 as uuidv4} from "uuid"
import {useDispatch} from "react-redux";
import {register} from "../../../redux/auth/auth";

const Register = () => {
    const [userL,setUserL] = useState({
        name:"",
        email:"",
        password:"",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (e) => {
        setUserL({...userL,[e.target.name]:e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!userL.name || !userL.email || !userL.password) {
            console.error("All fields are required.");
            return;
        }
        try {
            await dispatch(register(userL)).unwrap();
            navigate('/');
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };
    return (
        <div className="register">
            <form onSubmit={(e) => onSubmit(e)} className="register__form">
                <div className="register__row">
                    <h3 className="register__title">
                            Create Account
                    </h3>
                    <div className="register__row-card">
                        <input name={"name"} onChange={(e) => onChange(e)}  autocomplete="name"   placeholder={"Name"} className={"register__input"} type="text"/>
                        <input name={"email"}  onChange={(e) => onChange(e)} autocomplete="email"  placeholder={"Email"} className={"register__input"} type="email"/>
                        <input name={"password"} onChange={(e) => onChange(e)}   autocomplete="current-password"  placeholder={"Password"} className={"register__input"} type="password"/>
                        <button className="register__submit" type={"submit"} style={{cursor:"pointer"}}>
                            REGISTER
                        </button>
                        <Link to={"/login"}>
                            <p className="register__sing">
                                Already have an account? <span>Sign in</span>!
                            </p>
                        </Link>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;