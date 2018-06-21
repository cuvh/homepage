import React from "react";
import Link from "gatsby-link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children, title, className }) {
    return (
        <div
         key="test"
         className={className}>
            <link
             href="https://fonts.googleapis.com/css?family=Rubik:400,500"
             rel="stylesheet"
            />

            <Header />

            <div className="container">
                <h2 className="text-center m-top-12">{title}</h2>
                <div className="row m-top-12">
                    <div className="col-sm-3">
                        <ul className="list-unstyled text-page-menu">
                            <li>
                                <Link to="/terms">Terms of service</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-9">{children}</div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
