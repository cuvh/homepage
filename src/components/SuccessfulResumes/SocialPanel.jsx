import React from "react";
import classnames from "classnames";
import Track from "utils/Track";
import StoreService from "utils/StoreService";
import ShareButtons from "./ShareButtons";

export default class SocialPanel extends React.PureComponent {
    state = {
        active: false,
    };

    componentDidMount() {
        this.setState({
            active: StoreService.getItem(`wow-${this.props.url}`),
        });
    }

    onClick(event) {
        event.preventDefault();

        const newState = !this.state.active;
        this.setState({
            active: newState,
        });

        StoreService.setItem(`wow-${this.props.url}`, newState);

        Track("Successful Resumes", "Share", "Appreciate");
    }

    render() {
        const { className, url, facebookText, twitterText } = this.props;
        const { active } = this.state;

        return (
            <div className={`component--social-buttons ${className}`}>
                <span className="label hidden-xs hidden-sm">Share</span>
                <div className="social-buttons-wrapper">
                    <ShareButtons
                     {...this.props}
                     from="modal"
                    />
                </div>
                <div className="btn-wow-wrapper">
                    <span className="line" />
                    <span className="label m-sm-right-2">Appreciate</span>
                    <a
                     href="#"
                     onClick={event => this.onClick(event)}
                     className={classnames("btn-wow", {
                        active,
                     })}
                    />
                </div>
            </div>
        );
    }
}
