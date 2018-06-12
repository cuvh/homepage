import React from "react";
import Subscribe from "utils/Subscribe";
import classnames from "classnames";
import Track from "utils/Track";

export default class SubscribeNoImage extends React.PureComponent {
    state = {
        sending: false,
        subscribed: false,
        email: ""
    };

    async subscribe(event) {
        event.preventDefault();

        this.setState({
            sending: true,
            failed: false
        });

        try {
            await Subscribe(this.state.email);
            this.setState({
                subscribed: true,
                sending: false
            });
            Track(
                "Successful Resumes",
                "Subscribe to Newsletter",
                "Resume Page - Bottom"
            );
        } catch (e) {
            this.setState({
                failed: true,
                sending: false
            });
        }
    }

    render() {
        const { dark = false } = this.props;

        return (
            <section className="component--subscription Grid Grid--justifyCenter p-sm-top-6 p-md-top-9 p-sm-bottom-7 m-sm-top-5 m-md-top-10 text-center">
                <div className="component--subscription-form Grid-cell--md-7 Grid-cell--sm-10 Grid-cell--xs-12">
                    <h3
                     className={classnames("h2 m-sm-bottom-1 m-md-bottom-2", {
                        "text-white": dark
                     })}
                    >
                        Get more inspiration & free resources
                    </h3>
                    <p
                     className={classnames(
                        "m-sm-bottom-4 m-md-bottom-4 p-md-left-9 p-md-right-9",
                        {
                            "text-white": dark
                        }
                     )}
                    >
                        No spam, just information that will help you build a
                        resume that makes you feel relevant and well
                        represented.
                    </p>
                    {!this.state.subscribed ? (
                        <form
                         onSubmit={event => this.subscribe(event)}
                         className="Grid Grid--justifyCenter"
                        >
                            <div className="component--subscription-form Grid Grid-cell--md-8">
                                <input
                                 type="text"
                                 value={this.state.email}
                                 onChange={event =>
                                    this.setState({
                                        email: event.target.value
                                    })}
                                 className="component--subscription-field form-control Grid-cell--md-8 Grid-cell--xs-12 m-sm-bottom-2"
                                 placeholder="Write your email address"
                                />
                                <button
                                 disabled={this.state.sending}
                                 type="submit"
                                 className="component--subscription-button btn btn-primary cta-button Grid-cell--md-4"
                                >
                                    Subscribe
                                </button>
                                {this.state.failed ? (
                                    <div
                                     className="m-top-1"
                                     style={{ color: "red" }}
                                    >
                                        Error while subscribing! Make sure your
                                        email is correct
                                    </div>
                                ) : null}
                            </div>
                        </form>
                    ) : (
                        <div className="text-highlight-purple">
                            You have successfully subscribed!
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
