import React from "react";
import ReactDOM from "react-dom";

import bannerResumePreview from "assets/img/new-successful-resumes/small_banner_resume_preview_illustration@2.png";

function Portal({ children }) {
    return typeof document !== "undefined"
        ? ReactDOM.createPortal(children, document.getElementById("___gatsby"))
        : children;
}

export default class OpenModal extends React.PureComponent {
    state = {
        opened: false
    };

    constructor(props) {
        super(props);
        this.keyDown = this.onKeyDown.bind(this);
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
        document.querySelector('.modal-footer-bar').classList.add("hide");
    }

    render() {
        const { opened } = this.state;
        const { trigger, children, additionalContent } = this.props;

        return (
            <React.Fragment>
                <div onClick={() => this.onOpen()}>{trigger}</div>
                {opened ? (
                    <Portal>
                        <div
                         onClick={event => this.onBackdropClick(event)}
                         ref="modal"
                         tabIndex="-1"
                         className={opened ? "modal in" : "modal fade"}
                        >
                            <div className="modal-dialog modal-lg modal-example">
                                <div className="modal-content">{children}</div>
                            </div>
                            <button
                             type="button"
                             onClick={() => this.onClose()}
                             className="close close-example"
                            >
                                <i className="icon-times" />
                            </button>

                            {additionalContent}

                            <div className="modal-footer-bar">
                                <div className="modal-footer-bar-wrap modal-lg Grid Grid--alignCenter">
                                    <img 
                                        src={bannerResumePreview}
                                        className="m-right-2"
                                        height="107"
                                        alt="Footer Bar Illustration"/>
                                    <div>
                                    <h6 className="h6 text-dark-grey m-bottom-1">Your dream job awaits, make your move.</h6>
                                    <p className="text-darker-grey medium">Create a resume to be proud of with Enhnacv.</p>
                                    </div>
                                    <a
                                        href="https://app.enhancv.com/signup"
                                        // onClick={() => Track("Modal", "Signup Header")}
                                        className="btn btn-primary m-right-1">
                                        Try it for free
                                    </a>
                                    <button 
                                        onClick={() => this.onCloseFooterBar()}
                                        className="close-modal-footer-bar">
                                    </button>
                                </div>
                            </div>

                        </div>
                        
                    </Portal>
                ) : null}
            </React.Fragment>
        );
    }
}
