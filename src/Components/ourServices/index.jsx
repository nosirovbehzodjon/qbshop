import React from "react";
import Title from "../title";
import "./index.scss";
export const services = [
    {
        icon: "icon1.png",
        title: "Best Quality",
        description:
            "Quality Best dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id ",
    },
    {
        icon: "icon2.png",
        title: "Free Shipping",
        description:
            "Shipping Free dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id ",
    },
    {
        icon: "icon3.png",
        title: "BWarranty",
        description:
            "BWarranty Best dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id ",
    },
];
const OurServices = () => {
    return (
        <section className="services__container">
            <Title>Benefits Using Our Service</Title>
            <ul className="services__list">
                {services.map((item, index) => {
                    return (
                        <li key={index} className="list__item">
                            <img
                                src={`Images/services/${item.icon}`}
                                alt="icon"
                            />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default OurServices;
