import React from "react";
import "./index.scss";
//components
import Check from "../../Components/check";
import CartItem from "../../Components/cartItem";
import CartTitle from "../../Components/cartTitle";
const Cart = () => {
    return (
        <main className="cart_container">
            <CartTitle />
            <CartItem />
            <Check/>
        </main>
    );
};

export default Cart;
