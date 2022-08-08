import React from "react";
import "./index.scss";
import { ReactComponent as Delete } from "../../Assets/Images/Icons/delete.svg";

const CartItem = () => {
    return (
        <div className="cart__item__container">
            <div className="container_n_p_q">
                <div className="img__container">
                    <img src="Images/cart.png" alt="cart ing" />
                    <p className="name">Mouse T78 Black</p>
                </div>
                <p className="price">$10</p>
                <div className="quantity">
                    <button>-</button>
                    <span>3</span>
                    <button>+</button>
                </div>
            </div>
            <button className="delete">
                <Delete />
            </button>
        </div>
    );
};
export default CartItem;
