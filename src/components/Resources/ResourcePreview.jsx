import React from "react";
import Img from "components/Common/Img";

export default function ResourcePreview({ filled, empty, altText }) {
    return (
        <div className="modal-body resume-preview responsive-gatsby">
            <Img
             resolutions={filled.childImageSharp.resolutions}
             alt={altText}
             style={{
                width: "100%",
                position: "initial",
             }}
             imgStyle={{ height: "auto", borderRadius: "5px" }}
            />

            <Img
             resolutions={empty.childImageSharp.resolutions}
             alt={altText}
             style={{
                width: "100%",
                position: "initial",
             }}
             imgStyle={{ height: "auto", borderRadius: "5px" }}
            />
        </div>
    );
}
