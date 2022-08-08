import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/Images/Icons/cart.svg";
import { BsListUl } from "react-icons/bs";
import CustomButton from "../../Components/customButton";
import "./index.scss";
const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWidth);
    }, [width]);
    console.log(width);
    let change = toggle ? "translateX(0%)" : "translateX(-100%)";
    let activeClassName = "underline";
    return (
        <nav className="navbar">
            <span className="logo">Shoply.</span>
            <div
                className="container__ul hidden"
                style={{
                    transform:
                        window.innerWidth < 750 ? change : "translateX(0%)",
                }}
                onClick={() => setToggle(!toggle)}
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeClassName : null
                            }
                            to={"/"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav__item nav__item--none">/</li>
                    <li className="nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeClassName : null
                            }
                            to={"/products"}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="nav__item nav__item--none">/</li>
                    <li className="nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeClassName : null
                            }
                            to={"/about"}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
                <ul className="login_cart">
                    <li className="cart-icon">
                        <Link to={"/cart"} className="cart">
                            <Logo />
                            <span>10</span>
                        </Link>
                    </li>
                    <li>
                        <CustomButton
                            type={"button-small"}
                            onClick={() => navigate("login")}
                        >
                            Login
                        </CustomButton>
                    </li>
                </ul>
            </div>
            <div className="responsive__btn" onClick={() => setToggle(!toggle)}>
                <BsListUl />
            </div>
        </nav>
    );
};

export default Navbar;
