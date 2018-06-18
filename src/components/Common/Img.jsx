import React from "react";
import Img from "gatsby-image";

export default class Image extends React.PureComponent {
    state = {
        base64Class: "",
    };

    componentDidMount() {
        if (
            typeof navigator !== "undefined" &&
            /safari|iPad|iPhone|iPod/i.test(navigator.userAgent)
        ) {
            this.setState({ base64Class: "remove-base-64" });
        }
    }

    render() {
        const { className: noop, ...rest } = this.props;

        return (
            <Img
             className={`${this.props.className} ${this.state.base64Class}`}
             {...rest}
            />
        );
    }
}
