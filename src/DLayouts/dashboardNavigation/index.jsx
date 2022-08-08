import React from "react";
import "./index.scss";
import { ReactComponent as Home } from "../../Assets/Images/Icons/home.svg";
import { ReactComponent as Info } from "../../Assets/Images/Icons/info.svg";
import { ReactComponent as Logout } from "../../Assets/Images/Icons/logout.svg";
const DNavigate = () => {
    return (
        <nav className="d__navigate">
            <ul className="d__list">
                <li className="d__list__item">
                    <span className="d__icon">
                        <Home />
                    </span>
                    <p className="d__name">Home</p>
                </li>
                <li className="d__list__item">
                    <span className="d__icon">
                        <Info />
                    </span>
                    <p className="d__name">Info</p>
                </li>
                <li className="d__list__item">
                    <span className="d__icon">
                        <Logout />
                    </span>
                    <p className="d__name">Logout</p>
                </li>
            </ul>
        </nav>
    );
};
export default DNavigate;
