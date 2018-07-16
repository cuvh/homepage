import React from "react";
import classnames from "classnames";
import Track from "utils/Track";
import StoreService from "utils/StoreService";
import ShareButtons from "./ShareButtons";

export default class SocialBar extends React.PureComponent {
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

        Track("Successful Resumes", "WOW Button", `${this.props.url} - ${newState}`);
    }

    render() {
        const { facebookText, twitterText, url } = this.props;
        const { active } = this.state;

        return (
            <div className="component--social-bar">
                <div className="component--social-bar-wrap">
                    <ShareButtons
                     {...this.props}
                     from="bar"
                    />
                </div>

                <div className="component--social-bar-vertical-view">
                    <span className="line" />
                    <span className="label">Appreciate</span>
                    <a
                     href="#"
                     onClick={event => this.onClick(event)}
                     className={classnames("btn-wow btn-wow-reverse", {
                        active,
                     })}
                    />
                </div>
                <div className="component--social-bar-horizontal-view">
                    Do you like this article? Appreciate it, so we can make more like it
                    <a
                     href="#"
                     onClick={event => this.onClick(event)}
                     className={classnames("btn-wow-default", {
                        active,
                     })}
                    />
                </div>
            </div>
        );
    }
}
