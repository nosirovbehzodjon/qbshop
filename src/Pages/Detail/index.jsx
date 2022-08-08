import React from "react";
import Breadcrumb from "../../Components/breadcrumb";
import CustomButton from "../../Components/customButton";
import "./index.scss";

const Detail = () => {
    return (
        <>
            <Breadcrumb />
            <section className="detail__container">
                <div className="detail_img_container">
                    <img src="Images/detailmain.png" alt="detail" />
                </div>
                <main className="detail_description_container">
                    <h1 className="name">Razer Mouse X89</h1>
                    <p className="description">
                        Razer Mouse X89 sit amet, consectetur adipiscing elit.
                        Vestibulum nibh erat
                    </p>
                    <h2 className="what">Teknology</h2>
                    <div className="stock">Stock : 75</div>
                    <div className="stock">Price : $95</div>
                    <div className="quantity__add">
                        <div className="quantity">
                            <button>-</button>
                            <span>3</span>
                            <button>+</button>
                        </div>
                        <CustomButton type={"button-small"}>
                            Add to cart
                        </CustomButton>
                    </div>
                    <ul className="detail__img_list">
                        <li className="detai__img">
                            <img
                                src="Images/detail-1.png"
                                alt="Images/detail-1.png"
                            />
                        </li>
                        <li className="detai__img">
                            <img
                                src="Images/detail-2.png"
                                alt="Images/detail-2.png"
                            />
                        </li>
                        <li className="detai__img">
                            <img
                                src="Images/detail-3.png"
                                alt="Images/detail-3.png"
                            />
                        </li>
                        <li className="detai__img">
                            <img
                                src="Images/detail-4.png"
                                alt="Images/detail-4.png"
                            />
                        </li>
                    </ul>
                </main>
            </section>
        </>
    );
};

export default Detail;
