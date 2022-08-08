import React from "react";
import "./index.scss";
import { ReactComponent as Cart } from "../../Assets/Images/Icons/cart.svg";

const Card = ({ url, type }) => {
    return (
        <main className={`card__container ${type}`}>
            <div className="img__container">
                <img src={url} alt="cart" />
            </div>
            <button className="detail">DETAIL</button>
            <button className="cart">
                <Cart />
            </button>
        </main>
    );
};

export default Card;
