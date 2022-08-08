import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Components/breadcrumb";
import { BsFilterLeft } from "react-icons/bs";
import "./index.scss";
import { ReactComponent as Down } from "../../Assets/Images/Icons/down.svg";
import "./index.scss";
import CustomButton from "../../Components/customButton";
import { ReactComponent as Search } from "../../Assets/Images/Icons/search.svg";

const Products = () => {
    const [result, setResult] = useState("Mouse");
    const [toggle, setToggle] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWidth);
    }, [width]);
    let change = toggle ? "translateX(0%)" : "translateX(-100%)";
    return (
        <>
            <Breadcrumb />
            <section className="pruduts">
                <aside
                    className="container__filter"
                    style={{
                        transform: width < 830 ? change : "translateX(0%)",
                    }}
                >
                    <span
                        className="toggle__filter"
                        onClick={() => setToggle(!toggle)}
                    >
                        <BsFilterLeft className="icon__left" />
                    </span>
                    <h1>Filter</h1>
                    <ul className="category">
                        <h2>Product Category</h2>
                        <li className="category__item">
                            <label htmlFor={"electronic"}>Electronic</label>
                            <input
                                type={"checkbox"}
                                id={"electronic"}
                                className="checkbox"
                            />
                        </li>
                        <li className="category__item">
                            <label htmlFor={"jawelery"}>Jawelery </label>
                            <input
                                type={"checkbox"}
                                id={"jawelery"}
                                className="checkbox"
                            />
                        </li>
                        <li className="category__item">
                            <label htmlFor={"womens"}>Women’s Clothing</label>
                            <input
                                type={"checkbox"}
                                id={"womens"}
                                className="checkbox"
                            />
                        </li>
                        <li className="category__item">
                            <label htmlFor={"mens"}>Men’s Clothing</label>
                            <input
                                type={"checkbox"}
                                id={"mens"}
                                className="checkbox"
                            />
                        </li>
                    </ul>
                    <button className="other__product">
                        Others <Down />
                    </button>
                    <h2 className="range">Price range </h2>
                    <div className="max__min">
                        <main>
                            <select name="set_price" id="price">
                                <option value="Min">MIN</option>
                                <option value="Max">MAX</option>
                            </select>
                            <input type="text" />
                        </main>
                        <CustomButton type={"border-10 button-small"}>
                            Set Price
                        </CustomButton>
                    </div>
                </aside>
                <aside className="container__product">
                    <div className="product__input">
                        <input
                            type="text"
                            placeholder={"Mouse"}
                            onChange={(e) => setResult(e.target.value)}
                        />
                        <Search className="icon" />
                    </div>
                    <div className="input__settings">
                        <p>Search result for “{result}” </p>
                        <div>
                            <span>Sort by</span>
                            <select name="set_price" id="price">
                                <option value="name">Name (A - Z)</option>
                                <option value="Max">MAX</option>
                            </select>
                        </div>
                    </div>
                </aside>
            </section>
        </>
    );
};
export default Products;
