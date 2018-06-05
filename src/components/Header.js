import React from "react";
import Link from "gatsby-link";
import { withRouter } from "react-router";
import classnames from "classnames";

import logoImg from "../assets/img/logo-with-text.svg";

// $(document).on("click", '[data-toggle="navbar"]', function() {
//     $("body").toggleClass("navbar-mobile-active");
// });

class Header extends React.PureComponent {
    state = {
        stick: false
    };

    constructor(props) {
        super(props);

        this.onScroll = this.scroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    scroll(e) {
        const top =
            (window.pageYOffset || document.scrollTop) -
                (document.clientTop || 0) || 0;

        this.setState({
            stick: top > 10
        });
    }

    render() {
        const { location: { pathname } } = this.props;

        return (
            <div>
                <div className="navigation-spacer" />

                <nav
                 className={classnames(
                    "navbar navbar-default navbar-sticky navbar-static-top",
                    {
                        "navbar-stick": this.state.stick
                    }
                 )}
                >
                    <div className="navbar-spacing">
                        <div className="navbar-header">
                            <button
                             type="button"
                             data-toggle="navbar"
                             className="navbar-toggle collapsed"
                            >
                                <span className="sr-only">
                                    Toggle navigation
                                </span>
                                <div className="navbar-mobile-hidden">
                                    <span className="icon-bar first" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar last" />
                                </div>
                                <div className="close navbar-mobile-visible">
                                    &times;
                                </div>
                            </button>
                            <Link
                             to="/"
                             className="navbar-logo-wrapper"
                            >
                                <img
                                 className="navbar-logo"
                                 src={logoImg}
                                 alt="Enhancv Logo"
                                 width="144"
                                 height="23"
                                />
                            </Link>

                            <div className="navbar-center">
                                <ul className="list-unstyled navbar-mobile-menu navbar-mobile-visible bottom-md">
                                    <li className="active">
                                        <a href="/">Homepage</a>
                                    </li>
                                    <li
                                     className={classnames({
                                        active:
                                            pathname === "/successful-resumes"
                                     })}
                                    >
                                        <Link to="/successful-resumes">
                                            Successful Resumes
                                        </Link>
                                    </li>
                                    <li
                                     className={classnames({
                                        active: pathname === "/pricing"
                                     })}
                                    >
                                        <Link to="/pricing">Pricing</Link>
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
                                <li
                                 className={classnames({
                                    active: pathname === "/successful-resumes"
                                 })}
                                >
                                    <Link to="/successful-resumes">
                                        Successful Resumes
                                    </Link>
                                </li>
                                <li
                                 className={classnames({
                                    active: pathname === "/pricing"
                                 })}
                                >
                                    <Link to="/pricing">Pricing</Link>
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
}

export default withRouter(Header);
