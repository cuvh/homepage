import React from "react";
import Track from "utils/Track";

export default class SocialButtons extends React.PureComponent {
    onShare(type) {
        Track("Successful Resumes", "Share", `${this.props.url} - ${type}`);
    }

    render() {
        const { url, facebookText, twitterText } = this.props;

        return (
            <React.Fragment>
                <a
                 href={`https://www.facebook.com/sharer.php?u=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&message=${encodeURIComponent(facebookText)}`}
                 onClick={() => this.onShare("facebook")}
                 className="component--social-button btn-facebook"
                 target="_blank">
                    <i className="icon-facebook pull-right" />
                </a>

                <a
                 href={`https://twitter.com/intent/tweet?url=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&text=${encodeURIComponent(twitterText)}`}
                 onClick={() => this.onShare("twitter")}
                 target="_blank"
                 className="component--social-button btn-twitter">
                    <i className="icon-twitter pull-right" />
                </a>

                <a
                 href={`https://www.linkedin.com/shareArticle?mini=true&url=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&text=${encodeURIComponent(facebookText)}`}
                 onClick={() => this.onShare("linkedin")}
                 target="_blank"
                 className="component--social-button btn-linkedin">
                    <i className="icon-linkedin-alt pull-right" />
                </a>
            </React.Fragment>
        );
    }
}
