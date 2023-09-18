import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <>
            <Header />
            <main className="m-h-screen">
                <Outlet />
            </main>
            <Footer />
            <h3></h3>
        </>
    );
};

export default Layout;
