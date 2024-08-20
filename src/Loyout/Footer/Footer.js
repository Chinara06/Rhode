import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__top">
                        <h1 className="footer__title">rhode</h1>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-menu">
                            <ul className="footer__bottom-link">
                                <li className="footer__bottom-title">
                                    <h3 >NAVIGATE</h3>
                                </li>
                                <li className="footer__bottom-item">Shop</li>
                                <li className="footer__bottom-item">Our Story</li>
                                <li className="footer__bottom-item">Futures</li>
                                <li className="footer__bottom-item">Impact</li>
                                <li className="footer__bottom-item">VLOG</li>
                            </ul>
                            <ul className="footer__bottom-link">
                                <li className="footer__bottom-title">
                                    <h3>SOCIAL</h3>
                                </li>
                                <li className="footer__bottom-item"><IoLogoInstagram /> <a href="https://www.instagram.com/rhode">Instagram</a></li>
                                <li className="footer__bottom-item"><FaYoutube /> <a href="https://www.youtube.com/c/HaileyRhodeBieber">Youtube</a></li>
                                <li className="footer__bottom-item"><FaTiktok /> <a href="https://www.tiktok.com/@rhode">FTikTok</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;