import React from "react";
import Title from "../title";
import "./index.scss";
export const paterns = ["morgan.png", "oysho.png", "pull.png", "rose.png"];
const OurPaterns = () => {
    return (
        <section className="container__ourpaterns">
            <Title>Our Paternts</Title>
            <ul className="paterns__list">
                {paterns.map((item, index) => {
                    return (
                        <li key={index} className="patern">
                            <img src={`Images/${item}`} alt="paterns" />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default OurPaterns;
