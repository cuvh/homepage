import React from "react";

const NAV_HEIGHT = 62;

export default class Menu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            offsetTop: 0,
            scrollPosition: 0,
        };

        this.menu = React.createRef();
        this.navbar = {};
    }

    componentDidMount() {
        this.navbar = document.querySelector(".navbar-static-top");

        this.setState({ scrollPosition: window.pageYOffset });
        let famousNavInitialOffset = this.menu.current.offsetTop - NAV_HEIGHT;

        window.addEventListener("scroll", () => this.scroll(famousNavInitialOffset));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.scroll());
    }

    scroll(famousNavInitialOffset) {
        if (window.innerWidth >= 992) {
            let menu = this.menu.current;
            let currentScrollPos = window.pageYOffset;
            let distanceScrolled = this.state.scrollPosition - currentScrollPos;

            if (currentScrollPos > famousNavInitialOffset) {
                if (this.state.scrollPosition > currentScrollPos) {
                    this.navbar.style.top =
                        Math.min(parseInt(this.navbar.style.top) + distanceScrolled, 0) + "px";
                    this.setState({
                        offsetTop: NAV_HEIGHT + parseInt(this.navbar.style.top) + "px",
                    });
                } else {
                    this.navbar.style.top = menu.getBoundingClientRect().top - NAV_HEIGHT + "px";
                    this.setState({
                        offsetTop:
                            Math.max(parseInt(this.state.offsetTop) + distanceScrolled, 0) + "px",
                    });
                }
            }

            this.setState({ scrollPosition: currentScrollPos });
        }
    }

    render() {
        const { sections } = this.props;

        return (
            <section
             className="famous-resume--navbar m-sm-bottom-6"
             ref={this.menu}
             style={{ top: this.state.offsetTop }}>
                <nav className="container">
                    <ul className="Grid text-center-xs text-center-sm">
                        {sections.map(section => (
                            <li
                             key={section}
                             className="Grid-cell--md-2 Grid-cell--xs-12 m-md-right-5">
                                <a href={`#${section}`}>{section.replace(/([A-Z])/g, " $1")}</a>
                            </li>
                        ))}

                        <li className="Grid-cell--md-2 Grid-cell--xs-12 m-md-right-5">
                            <a href="#famous-resume">Resume</a>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}
