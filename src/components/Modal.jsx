import React from "react";
import ReactDOM from "react-dom";
import Track from "utils/Track";

import bannerResumePreview from "assets/img/new-successful-resumes/small_banner_resume_preview_illustration@2.png";

function Portal({ children }) {
    return typeof document !== "undefined"
        ? ReactDOM.createPortal(children, document.getElementById("___gatsby"))
        : children;
}

export default class OpenModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.keyDown = this.onKeyDown.bind(this);
        this.state = {
            opened: false,
            footerHidden: props.footerHidden,
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDown);
    }

    onKeyDown(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27 && this.state.opened) {
            this.onClose();
        }
    }

    onBackdropClick(event) {
        if (event.target === this.refs.modal) {
            this.onClose();
        }
    }

    onOpen() {
        this.setState({ opened: true });
        document.body.classList.add("no-scroll");
    }

    onClose() {
        this.setState({ opened: false });
        document.body.classList.remove("no-scroll");
    }

    onCloseFooterBar() {
        this.setState({ footerHidden: true });
    }

    render() {
        const { opened } = this.state;
        const { trigger, children, additionalContent, pageUrl } = this.props;

        return (
            <React.Fragment>
                <div onClick={() => this.onOpen()}>{trigger}</div>
                {opened ? (
                    <Portal>
                        <div
                         onClick={event => this.onBackdropClick(event)}
                         ref="modal"
                         tabIndex="-1"
                         className={opened ? "modal in" : "modal fade"}>
                            <div className="modal-dialog modal-lg modal-example">
                                <div className="modal-content">{children}</div>
                            </div>
                            <button
                             type="button"
                             onClick={() => this.onClose()}
                             className="close close-example">
                                <i className="icon-times" />
                            </button>

                            {additionalContent}

                            {!this.state.footerHidden ? (
                                <div className="modal-footer-bar">
                                    <div className="modal-footer-bar-wrap modal-lg Grid Grid--alignCenter">
                                        <img
                                         src={bannerResumePreview}
                                         className="m-right-2"
                                         height="107"
                                         alt="Footer Bar Illustration"
                                        />
                                        <div>
                                            <h6 className="h6 text-dark-grey m-bottom-1">
                                                Your dream job awaits, make your move.
                                            </h6>
                                            <p className="text-darker-grey medium">
                                                Create a resume to be proud of with Enhnacv.
                                            </p>
                                        </div>
                                        <a
                                         href="https://app.enhancv.com"
                                         className="btn btn-primary m-right-1"
                                         onClick={() =>
                                            Track(
                                                "Successful Resumes",
                                                "Click Try Enhancv",
                                                `${pageUrl} - Expanded Resume`
                                            )}>
                                            Try it for free
                                        </a>
                                        <button
                                         onClick={() => this.onCloseFooterBar()}
                                         className="close-modal-footer-bar"
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </Portal>
                ) : null}
            </React.Fragment>
        );
    }
}
