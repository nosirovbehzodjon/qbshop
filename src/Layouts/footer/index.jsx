import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import "./index.scss";
const Footer = () => {
    return (
        <footer className="container__footer footer-small">
            <div className="grid__item">
                <h1>Shoply.</h1>
                <p>© Copyright 2021. Created by OurTeam</p>
            </div>
            <div className="grid__item">
                <ul>
                    <li>
                        <Link to={'/'}>
                            <FaFacebookF />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
