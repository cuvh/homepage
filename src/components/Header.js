import React from "react";
import Link from "gatsby-link";

import logoImg from "../assets/img/logo-with-text.svg";

export default function Header() {
    return (
        <div>
            <div className="navigation-spacer" />

            <nav className="navbar navbar-default navbar-sticky navbar-static-top">
                <div className="navbar-spacing">
                    <div className="navbar-header">
                        <button
                         type="button"
                         data-toggle="navbar"
                         className="navbar-toggle collapsed"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <div className="navbar-mobile-hidden">
                                <span className="icon-bar first" />
                                <span className="icon-bar" />
                                <span className="icon-bar last" />
                            </div>
                            <div className="close navbar-mobile-visible">
                                &times;
                            </div>
                        </button>
                        <a
                         href="/"
                         className="navbar-logo-wrapper"
                        >
                            <img
                             className="navbar-logo"
                             src={logoImg}
                             alt="Enhancv Logo"
                             width="144"
                             height="23"
                            />
                        </a>

                        <div className="navbar-center">
                            <ul className="list-unstyled navbar-mobile-menu navbar-mobile-visible bottom-md">
                                <li className="active">
                                    <a href="/">Homepage</a>
                                </li>
                                <li className="active">
                                    <a href="/successful-resumes.html">
                                        Successful Resumes
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="/pricing.html">Pricing</a>
                                </li>
                                <li>
                                    <a
                                     href="{{ urls.blog }}"
                                     target="_blank"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                            <div className="bottom-xs navbar-mobile-visible">
                                <a
                                 href="{{ urls.builder }}/login"
                                 data-track="event"
                                 data-category="Homepage"
                                 data-action="Click Signup"
                                 data-label="Sign In"
                                 className="visible-xs btn btn-default btn-sign-in"
                                >
                                    Sign In
                                </a>
                            </div>
                            <a
                             href="{{ urls.builder }}"
                             data-track="event"
                             data-category="Homepage"
                             data-action="Click Signup"
                             data-label="Sign Up"
                             className="visible-xs btn btn-primary navbar-mobile-visible-sticky"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href="/successful-resumes.html">
                                    Successful Resumes
                                </a>
                            </li>
                            <li className="active">
                                <a href="/pricing.html">Pricing</a>
                            </li>

                            <li>
                                <a
                                 data-track="event"
                                 data-category="Homepage"
                                 data-action="Click Login"
                                 href="https://app.enhancv.com/login"
                                >
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <button
                                 onClick={() =>
                                    (window.location =
                                        "https://app.enhancv.com/signup")}
                                 data-track="event"
                                 data-category="Homepage"
                                 data-action="Click Signup"
                                 data-label="Sign Up"
                                 className="btn btn-primary navbar-btn m-left-1 m-right-1"
                                >
                                    Get Started
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
