import React from "react";
import "./index.scss";

const CartTitle = () => {
    return (
        <div className="cart__title__container">
            <div className="container_n_p_q">
                <div className="img__container">
                    <p className="name">Product</p>
                </div>
                <p className="price">Price</p>
                <div className="quantity">Quantity</div>
            </div>
            <div className="delete">Delete</div>
        </div>
    );
};
export default CartTitle;
