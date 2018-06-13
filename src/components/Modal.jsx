import React from "react";

export default class OpenModal extends React.PureComponent {
    state = {
        opened: false
    };

    onBackdropClick(event) {
        if (event.target === this.refs.modal) {
            this.setState({
                opened: false
            });
        }
    }

    onOpen() {
        this.setState({ opened: true });
    }

    onClose() {
        this.setState({ opened: false });
    }

    render() {
        const { opened } = this.state;
        const { trigger, children } = this.props;

        return (
            <React.Fragment>
                <div onClick={() => this.onOpen()}>{trigger}</div>
                {opened ? (
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
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}
