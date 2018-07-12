import React from "react";
import StoreService from "utils/StoreService";

import Link from "gatsby-link";
import srImg from "assets/img/msg-SR-Emoji@3x.svg";

export default class SuccessfulResumesStrip extends React.PureComponent {
    render() {
        return (
            <div className="Grid Grid--alignCenter msg-SR Grid--justifyCenter">
                <Link
                 className="col-sm-10 col-xs-12 p-sm-bottom-1 p-sm-top-1"
                 to="/successful-resumes"
                 onClick={this.props.hideMsg}>
                    <img
                     src={srImg}
                     alt=""
                    />

                    <span className="hidden-md hidden-lg">Hey, we launched Successful Resumes</span>

                    <span className="hidden-xs hidden-sm">
                        Hey, we just launched Successful Resumes — real-life resumes that got people
                        like you hired at top companies. <span> Check it out &nbsp;&rarr;</span>
                    </span>
                </Link>
                <button
                 type="button"
                 className="close m-sm-bottom-1 m-right-2 hidden-xs"
                 onClick={this.props.hideMsg}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
