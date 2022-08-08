import React from "react";
import Card from "../card";
import Title from "../title";
import { useQuery } from "react-query";
import "./index.scss";

const Product = () => {
    const fetchProjects = () =>
        fetch("https://jsonplaceholder.typicode.com/photos/10")
            .then((response) => response.json())
            .then((data) => data);
    const { data } = useQuery(["products"], () => fetchProjects(), {
        keepPreviousData: true,
    });
    console.log(data);
    return (
        <section className="product__container">
            <Title>Product</Title>
            <div className="wrapper">
                <Card key={data?.id} url={"https://pcmarket.uz/wp-content/uploads/2021/04/190495.970_result.png"} />
            </div>
        </section>
    );
};

export default Product;
