import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

export default class FamousResumesList extends React.PureComponent {
    state = {
        revealed: false
    };

    reveal(event) {
        event.preventDefault();
        this.setState({
            revealed: true
        });
    }

    render() {
        const { data } = this.props;
        const { revealed } = this.state;

        let items = revealed ? data : data.slice(0, 3);

        return (
            <section
             id="explore-more-resumes"
             className="resumes--famous-list"
            >
                <div className="resumes--famous-wrap Grid m-sm-bottom-3 m-md-bottom-10">
                    {items.map(({ node }) => (
                        <Link
                         key={node.url}
                         to={`/successful-resumes/famous/${node.url}`}
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--person-avatar">
                                    <Img
                                     resolutions={
                                        node.avatar.childImageSharp.resolutions
                                     }
                                     alt="Steve Jobs Former Apple CEO"
                                    />
                                </span>
                                <h4 className="resumes--person-name m-top-2">
                                    {node.name}
                                </h4>
                                <h5 className="resumes--person-jobtitle">
                                    Former Apple CEO
                                </h5>
                                <div className="resumes--person-description">
                                    <p className="m-top-2">
                                        {node.description}
                                    </p>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <Img
                                 resolutions={
                                    node.resume.childImageSharp.resolutions
                                 }
                                 alt="Steve Jobs Former Apple CEO"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
                {!revealed ? (
                    <div className="text-center m-sm-bottom-4 m-md-bottom-10">
                        <a
                         href="#"
                         onClick={event => this.reveal(event)}
                         className="feature-link"
                        >
                            See more famous resumes &nbsp;→
                        </a>
                    </div>
                ) : null}
            </section>
        );
    }
}
