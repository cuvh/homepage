import React from "react";

export default class OpenModal extends React.PureComponent {
    state = {
        opened: false
    };

    render() {
        const { opened } = this.state;
        const { trigger, children } = this.props;

        return (
            <React.Fragment>
                <div onClick={() => this.setState({ opened: true })}>
                    {trigger}
                </div>
                {opened ? (
                    <div
                     tabIndex="-1"
                     className={opened ? "modal in" : "modal fade"}
                    >
                        <div className="modal-dialog modal-lg modal-example">
                            <div className="modal-content">{children}</div>
                        </div>
                        <button
                         type="button"
                         onClick={() => this.setState({ opened: false })}
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
