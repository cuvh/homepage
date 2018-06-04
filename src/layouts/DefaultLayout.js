import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children, data, className }) {
    return (
        <div
         key="test"
         className={className}
        >
            <link
             href="https://fonts.googleapis.com/css?family=Rubik:400,500"
             rel="stylesheet"
            />

            <Header />

            {children}
            <Footer />
        </div>
    );
}
