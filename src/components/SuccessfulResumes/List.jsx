import React from "react";
import Img from "components/Common/Img";
import Link from "gatsby-link";
import classnames from "classnames";

import { map, flatten, uniq, flow, contains } from "lodash/fp";

import Track from "utils/Track";
import ResumeBadge from "components/SuccessfulResumes/ResumeBadge";

const IS_CRAWLER = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

const getIndustries = flow(map("node.industry"), flatten, uniq);

export default class List extends React.PureComponent {
    state = {
        // if crawler, reveal all content for SEO purposes (hidden content is not properly indexed)
        revealed: IS_CRAWLER,
        filter: null,
    };

    filter(type) {
        Track("Successful Resumes", "Click Resume Industries", type);
        this.setState({
            filter: type,
        });
    }

    reveal(e) {
        Track("Successful Resumes", "Reveal Users List");
        e.preventDefault();
        this.setState({
            revealed: true,
        });
    }

    render() {
        const { data } = this.props;
        const { filter, revealed } = this.state;

        const industries = getIndustries(data);

        let items;
        if (filter) {
            items = data.filter(({ node: { industry } }) => contains(this.state.filter, industry));
        } else {
            items = this.state.revealed ? data : data.slice(0, 6);
        }

        return (
            <section className="resumes--others m-sm-top-4 m-md-top-19 m-sm-bottom-3 m-md-bottom-7">
                <div className="resumes--list">
                    <h4 className="resumes--others-title text-center">See how others did it</h4>
                    <nav className="resumes--filter m-sm-bottom-2 m-md-bottom-2 m-sm-top-4 m-md-top-4">
                        <button
                         onClick={() => this.filter(null)}
                         className={classnames("resumes--filter-button", {
                            selected: filter === null,
                         })}>
                            All resumes
                        </button>
                        {industries.map(industry => (
                            <button
                             key={industry}
                             onClick={() => this.filter(industry)}
                             className={classnames("resumes--filter-button", {
                                selected: filter === industry,
                             })}>
                                {industry}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="resumes--others-wrap Grid">
                    {items.map(({ node }, index) => (
                        <Link
                         key={node.url + index}
                         to={`/successful-resumes/${node.url}`}
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1">
                            <div className="resumes--box">
                                <ResumeBadge label={node.label} />
                                <span className="resumes--person-avatar">
                                    <Img
                                     style={{ overflow: "initial" }}
                                     className="m-xs-left-1 m-md-left-2"
                                     resolutions={node.avatar.childImageSharp.resolutions}
                                     alt={`${node.name} photo`}
                                    />
                                </span>
                                <div className="resumes--others-person-info">
                                    <h4 className="resumes--person-name m-top-1 m-bottom-0">
                                        {node.name}
                                    </h4>
                                    <h5 className="resumes--person-jobtitle m-no">
                                        {node.tags.join(", ")}
                                    </h5>
                                    {node.companyLogo ? (
                                        <div className="resumes--hired resumes--hired-list-item m-xs-top-2 m-md-top-3">
                                            <span className="label">Hired at</span>
                                            <Img
                                             style={{
                                                display: "inline-block",
                                             }}
                                             className="m-top-0"
                                             resolutions={
                                                node.companyLogo.childImageSharp.resolutions
                                             }
                                             alt="Company logo"
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <Img
                                 className="m-xs-left-1 m-md-left-2"
                                 resolutions={node.resumes[0].image.childImageSharp.resolutions}
                                 alt={`${node.name} resume preview`}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
                {!filter && !revealed ? (
                    <div className="text-center m-sm-bottom-4 m-md-bottom-9 m-sm-top-4 m-md-top-10">
                        <a
                         onClick={event => this.reveal(event)}
                         href="#"
                         className="feature-link">
                            See more real resumes &nbsp;→
                        </a>
                    </div>
                ) : null}
            </section>
        );
    }
}
