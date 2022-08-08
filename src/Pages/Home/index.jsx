import React from "react";
import ShowCase from "../../Components/showCase";
import OurPartners from "../../Components/ourPartners";
import OurServices from "../../Components/ourServices";
import Costumers from "../../Components/costumers";
import Product from "../../Components/product";
import Detail from "../Detail";

const Home = () => {
    return (
        <>
            <ShowCase />
            <OurPartners />
            <Product />
            <OurServices />
            <Costumers />
            <Detail/>
        </>
    );
};

export default Home;
