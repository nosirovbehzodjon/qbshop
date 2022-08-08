import React from "react";
import "./index.scss";
const CustomButton = ({ children, type, ...otherProps }) => {
    return (
        <button className={`button-main ${type}`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
