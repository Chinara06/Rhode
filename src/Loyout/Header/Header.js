import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import {logout} from "../../redux/auth/auth"
const Header = () => {
    const {data} = useSelector(store => store.auth);
    const dispatch = useDispatch()
    return (
        <header className={"header"}>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__menu">
                        <ul className="header__item">
                            <Link to={"/shop"}>
                                <li className="header__items">SHOP</li>
                            </Link>
                        </ul>
                        <ul className="header__item">
                            <Link to={"/about"}>
                                <li className="header__items">ABOUT</li>
                                </Link>
                        </ul>
                        <ul className="header__item">
                            <Link to={"/future"}>
                                <li className="header__items">FUTURES</li>
                            </Link>
                        </ul>
                        <ul className="header__item">
                            <Link to={"/"}>
                                <li className="header__rhode">
                                    rhode
                                </li>
                            </Link>
                        </ul>
                            <ul className="header__item">
                                <Link to={"/search"}>
                                <li className="header__items">SEARCH</li>
                                </Link>
                            </ul>
                        {
                            data ? <MdOutlineLogout onClick={() => dispatch(logout())} size={30} style={{color:"#67645e"}} />
                            : <Link to={"/register"}>
                                <ul className="header__item">
                                    <li className="header__items">ACCOUNT</li>
                                </ul>
                            </Link>
                        }
                        <Link to={"/cart"}>
                            <ul className="header__item">
                                <li className="header__items">CART</li>
                            </ul>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;