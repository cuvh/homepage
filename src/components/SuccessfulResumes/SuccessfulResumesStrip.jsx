import React from "react";
import StoreService from "utils/StoreService";

import Link from "gatsby-link";
import srImg from "assets/img/msg-SR-Emoji@3x.svg";

export default class SuccessfulResumesStrip extends React.PureComponent {
    state = {
        hidden: true
    };

    componentDidMount() {
        this.setState({
            hidden: Boolean(StoreService.getItem("isMsgShowed"))
        });
    }

    onHide() {
        this.setState({
            hidden: true
        });
        StoreService.setItem("isMsgShowed", true);
    }

    render() {
        return !this.state.hidden ? (
            <div className="Grid Grid--alignCenter msg-SR Grid--justifyCenter">
                <Link
                 className="col-sm-10 col-xs-12 p-sm-bottom-1 p-sm-top-1"
                 to="/successful-resumes"
                 onClick={() => this.onHide()}
                >
                    <img src={srImg} />

                    <span className="hidden-md hidden-lg">
                        Hey, we launched Successful Resumes
                    </span>

                    <span className="hidden-xs hidden-sm">
                        Hey, we just launched Successful Resumes — real-life
                        resumes that got people like you hired at top companies.{" "}
                        <span> Check it out &nbsp;&rarr;</span>
                    </span>
                </Link>
                <button
                 type="button"
                 className="close m-sm-bottom-1 m-right-2 hidden-xs"
                 onClick={() => this.onHide()}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) : null;
    }
}
