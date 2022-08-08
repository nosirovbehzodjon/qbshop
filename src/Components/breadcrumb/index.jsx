import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { createLocation } from "../../Utils/F.createLocation.js";
const Breadcrumb = () => {
    let location = useLocation();
    console.log(location);
    return (
        <section className="breadcrumb__container">
            <section className="breadcrumb">
                <p>{createLocation(location.pathname)}</p>
            </section>
        </section>
    );
};

export default Breadcrumb;
