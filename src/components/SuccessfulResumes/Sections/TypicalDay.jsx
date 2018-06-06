import React from "react";

import mytimeImg from "assets/img/new-successful-resumes/famous/elon-musk/my_time-2elon-musk.png";

export default function TypicalDay() {
  return (
    <section
     id="typical-day"
     className="famous-resume--person-time Grid m-md-bottom-3 m-sm-bottom-3 p-sm-3"
    >
      <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 text-center">
        <img
         width="700"
         className="famous-resume--person-time-illustration"
         src={mytimeImg}
         alt="Elon Musk Day Timeline"
        />
        <p className="text-white-smoke text-center full-width">
          Photo attribution: Cover Image by James Stringer, REUTERS
        </p>
      </div>
      <div className="Grid-cell--md-5 Grid-cell--lg-4 Grid-cell--sm-10 Grid-cell--xs-12 p-md-left-13 p-md-top-10 text-darker-grey">
        <div className="m-md-bottom-6 m-md-bottom-6 m-sm-bottom-4">
          <h2 className="h2 m-md-bottom-6 m-sm-bottom-3">His typical day</h2>
          <h6>
            <span
             className="bullet mobile-hide"
             style={{ backgroundColor: "#f6e4bf" }}
            />{" "}
            Making life multi-planetary
          </h6>
          <p>
            Gave three engagement rings to his wife Tallulah, one of them
            designed by him.
          </p>
        </div>
        <div className="m-md-bottom-6 m-md-bottom-6 m-sm-bottom-4">
          <h6>
            <span
             className="bullet mobile-hide"
             style={{ backgroundColor: "#f6e4bf" }}
            />{" "}
            Going out with beautiful women
          </h6>
          <p>
            Gave three engagement rings to his wife Tallulah, one of them
            designed by him.
          </p>
        </div>
        <div className="m-md-bottom-6 m-md-bottom-6 m-sm-bottom-4">
          <h6>
            <span
             className="bullet mobile-hide"
             style={{ backgroundColor: "#f6e4bf" }}
            />{" "}
            Going out with beautiful women
          </h6>
          <p>
            Gave three engagement rings to his wife Tallulah, one of them
            designed by him.
          </p>
        </div>
      </div>
    </section>
  );
}
