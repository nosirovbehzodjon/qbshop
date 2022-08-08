import React from "react";
import Title from "../title";
import "./index.scss";

const Costumers = () => {
    return (
        <section className="costumer__container">
            <Title>What Our Costumers Are Saying</Title>
            <aside className="wrapper">
                <div className="img__container">
                    <img src="Images/client.jpg" alt="" />
                </div>
                <div className="text__container">
                    <h1>Help us Improve our productivity</h1>
                    <p>
                        “Our Costumers dolor sit amet, consectetur adipiscing
                        elit. Nunc consectetur, purus id tincidunt feugiat,
                        metus orci sagittis elit, quis tempor orci elit id arcu.
                        Proin egestas bibendum efficitur. ”
                    </p>
                    <h2>Adriana Lopez</h2>
                    <h3>Client</h3>
                </div>
            </aside>
        </section>
    );
};

export default Costumers;
