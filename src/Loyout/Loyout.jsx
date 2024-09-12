import React from 'react';
import {Outlet} from  "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Loyout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Loyout;