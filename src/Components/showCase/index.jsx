import React from "react";
import CustomButton from "../customButton";
import "./index.scss";

const ShowCase = () => {
    return (
        <header className="container__showcase">
            <aside className="showcase__text">
                <h1>Logitech G Pro X Superlight</h1>
                <p>
                    QB shop asychroun dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nibh erat
                </p>
                <CustomButton>Shop Now</CustomButton>
            </aside>
            <aside className="showcase__img">
                <img src="Images/showcase.png" alt="showcase" />
            </aside>
        </header>
    );
};

export default ShowCase;
