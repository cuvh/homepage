import React from "react";
import classnames from "classnames";

import rocket from "assets/img/career/icons/rocket.svg";
import battery from "assets/img/career/icons/battery.svg";
import bike from "assets/img/career/icons/bike.svg";
import globe from "assets/img/career/icons/globe.svg";
import people from "assets/img/career/icons/people.svg";
import smile from "assets/img/career/icons/smile.svg";

export default function CareerBenefits() {
    return (
        <div className="career-benefits">
            <div className="row">
                <div className="col-sm-4 col-xs-12 top-sm">
                    <img
                     src={rocket}
                     alt="circled cross"
                    />
                    <p className="text-muted m-top-3">
                        A culture of learning and personal growth – in-house coaching and a book
                        library to boost your spirit.
                    </p>
                </div>
                <div className="col-sm-4 col-xs-12 top-sm">
                    <img
                     src={people}
                     alt="pdf file icon"
                    />
                    <p className="text-muted m-top-3">
                        Unforgettable company-wide events when we work and celebrate together.
                    </p>
                </div>
                <div className="col-sm-4 col-xs-12 top-sm">
                    <img
                     src={bike}
                     alt="happy face"
                    />
                    <p className="text-muted m-top-3">
                        Health matters to us, so each team member has their own budget for sports.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 col-xs-12 m-md-top-6 m-sm-top-4">
                    <img
                     src={globe}
                     alt="brush"
                    />
                    <p className="text-muted m-top-3">
                        25 days per year to work remotely from anywhere you want.
                    </p>
                </div>
                <div className="col-sm-4 col-xs-12 m-md-top-6 m-sm-top-4">
                    <img
                     src={battery}
                     alt="smiling laptop"
                    />
                    <p className="text-muted m-top-3">
                        Two extra days off – for your birthday and mental health – or 22 days of
                        holiday in total.
                    </p>
                </div>
                <div className="col-sm-4 col-xs-12 m-md-top-6 m-sm-top-4">
                    <img
                     src={smile}
                     alt="hr heart"
                    />
                    <p className="text-muted m-top-3">
                        Even when an ocean separates us, we are always there for one another.
                    </p>
                </div>
            </div>
        </div>
    );
}
