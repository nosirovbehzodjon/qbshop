import React from "react";
import "./index.scss";
import { GiHamburgerMenu } from "react-icons/gi";
const DHeader = () => {
    return (
        <header className="dheader">
            <p>Shoply.</p>
            <span className="d__toggle">
                <GiHamburgerMenu />
            </span>
        </header>
    );
};
export default DHeader;
