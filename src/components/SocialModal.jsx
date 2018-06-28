import React from "react";
import Modal from "./Modal";
import SocialPanel from "components/SuccessfulResumes/SocialPanel";

export default class OpenModal extends React.PureComponent {
    render() {
        const { trigger, children, socialData } = this.props;
        const socials = this.props.socials || true;

        const socialPanel = socials ? (
            <SocialPanel
             className="inModal hasBackground"
             facebookText={socialData.facebookText}
             twitterText={socialData.twitterText}
             url={socialData.url}
            />
        ) : null;

        return (
            <Modal
             trigger={trigger}
             additionalContent={socialPanel}
             pageUrl={socialData.url}>
                {children}
            </Modal>
        );
    }
}
