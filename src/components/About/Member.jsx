import React from "react";
import Modal from "components/Modal";

export default function Member(props) {
    return (
        <div className="member center-block bottom-md">
            <div
             className="member-thumb"
             style={{ backgroundImage: `url(${props.image})` }}
            />

            <Modal
             trigger={
                <a
                 className="member-content text-center"
                 data-toggle="modal"
                 data-track="event"
                 data-category="About"
                 data-action="Click Team Member"
                 data-label={props.name}
                >
                    <div className="member-text">
                        <p className="member-title bottom-xs">{props.name}</p>
                        <p className="no-margin text-muted">{props.position}</p>
                    </div>
                </a>
             }
            >
                <div className="embed-responsive embed-responsive-member">
                    <div
                     style={{
                        backgroundImage: `url(${props.image})`
                     }}
                     className="embed-responsive-item"
                    />
                </div>
                <div
                 className="modal-body"
                 style={{ background: "white" }}
                >
                    <h5 className="h5">{props.name}</h5>

                    <p className="text-primary">{props.position}</p>

                    {props.description ? <p>{props.description}</p> : null}

                    <div className="top-sm">
                        {props.pdf ? (
                            <a
                             href={`/img/about/member/${props.pdf}`}
                             className="btn btn-default right-xs"
                             target="_blank"
                            >
                                View Resume
                            </a>
                        ) : null}

                        {props.website ? (
                            <a
                             href={props.website}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-link" />
                            </a>
                        ) : null}

                        {props.linkedin ? (
                            <a
                             href={`https://www.linkedin.com/in/${props.linkedin}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-linkedin-alt" />
                            </a>
                        ) : null}

                        {props.medium ? (
                            <a
                             href={`https://medium.com/@${props.medium}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-social-medium" />
                            </a>
                        ) : null}

                        {props.dribbble ? (
                            <a
                             href={`https://dribbble.com/${props.dribbble}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-dribbble" />
                            </a>
                        ) : null}

                        {props.github ? (
                            <a
                             href={`https://github.com/${props.github}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-github-alt" />
                            </a>
                        ) : null}

                        {props.twitter ? (
                            <a
                             href={`https://twitter.com/${props.twitter}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-twitter" />
                            </a>
                        ) : null}

                        {props.facebook ? (
                            <a
                             href={`https://facebook.com/${props.facebook}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-facebook" />
                            </a>
                        ) : null}

                        {props.instagram ? (
                            <a
                             href={`https://instagram.com/${props.instagram}`}
                             className="btn btn-link btn-member-icon"
                             target="_blank"
                            >
                                <i className="icon-instagram" />
                            </a>
                        ) : null}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
