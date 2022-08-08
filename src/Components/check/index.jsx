import React from "react";
import "./index.scss";
import CustomButton from "../customButton";
const Check = () => {
    return (
        <section className="check__section__container">
            <section className="check__container">
                <main className="main__container">
                    <div className="check__name">Subtotal</div>
                    <div className="check__point">:</div>
                    <div className="check__price">$90</div>
                </main>
                <main className="main__container">
                    <div className="check__name">Shipping Fee</div>
                    <div className="check__point">:</div>
                    <div className="check__price">$5</div>
                </main>
                <hr />
                <main className="main__container">
                    <div className="check__name">Total Order </div>
                    <div className="check__point">:</div>
                    <div className="check__price">$95</div>
                </main>
            </section>
            <section className="button__check">
                <CustomButton type={"button-second"}>Close</CustomButton>
                <CustomButton>Check Out</CustomButton>
            </section>
        </section>
    );
};

export default Check;
