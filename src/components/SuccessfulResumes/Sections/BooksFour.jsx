import React from "react";

import bookPlaceholder from "assets/img/new-successful-resumes/placeholders/book-placeholder.jpg";

export default function BooksFour() {
    return (
        <section className="component--books m-sm-top-5 m-md-top-10 m-md-bottom-5">
            <div className="container">
                <h3 className="h3">Books that formed his life 4 books</h3>
                <div className="component--books-wrap Grid text-dark-grey m-sm-top-3 m-md-top-6 p-sm-bottom-3">
                    <a
                     href="https://www.amazon.com/"
                     target="_blank"
                     rel="noopener"
                     className="component--book-box Grid-cell--xs-3 text-center p-md-left-2 p-md-right-2"
                    >
                        <div className="component--book-cover m-sm-bottom-4 m-md-bottom-4">
                            <img
                             width="248"
                             src={bookPlaceholder}
                             alt="Books Placeholder"
                            />
                        </div>
                        <h5 className="component--book-title">
                            The Design of Everyday Things
                        </h5>
                        <h6 className="component--book-author">
                            Donald A. Norman
                        </h6>
                    </a>
                    <a
                     href="https://www.amazon.com/"
                     target="_blank"
                     rel="noopener"
                     className="component--book-box Grid-cell--xs-3 text-center p-md-left-2 p-md-right-2"
                    >
                        <div className="component--book-cover m-sm-bottom-4 m-md-bottom-4">
                            <img
                             width="248"
                             src={bookPlaceholder}
                             alt="Books Placeholder"
                            />
                        </div>
                        <h5 className="component--book-title">
                            The Design of Everyday Things
                        </h5>
                        <h6 className="component--book-author">
                            Donald A. Norman
                        </h6>
                    </a>
                    <a
                     href="https://www.amazon.com/"
                     target="_blank"
                     rel="noopener"
                     className="component--book-box Grid-cell--xs-3 text-center p-md-left-2 p-md-right-2"
                    >
                        <div className="component--book-cover m-sm-bottom-4 m-md-bottom-4">
                            <img
                             width="248"
                             src={bookPlaceholder}
                             alt="Books Placeholder"
                            />
                        </div>
                        <h5 className="component--book-title">
                            The Design of Everyday Things
                        </h5>
                        <h6 className="component--book-author">
                            Donald A. Norman
                        </h6>
                    </a>
                    <a
                     href="https://www.amazon.com/"
                     target="_blank"
                     rel="noopener"
                     className="component--book-box Grid-cell--xs-3 text-center p-md-left-2 p-md-right-2"
                    >
                        <div className="component--book-cover m-sm-bottom-4 m-md-bottom-4">
                            <img
                             width="248"
                             src={bookPlaceholder}
                             alt="Books Placeholder"
                            />
                        </div>
                        <h5 className="component--book-title">
                            The Design of Everyday Things
                        </h5>
                        <h6 className="component--book-author">
                            Donald A. Norman
                        </h6>
                    </a>
                </div>
            </div>
        </section>
    );
}
