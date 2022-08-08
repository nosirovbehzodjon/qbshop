import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;
