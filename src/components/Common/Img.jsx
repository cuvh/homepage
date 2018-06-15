import React from "react";
import Img from "gatsby-image";

export default function Image({ className, ...props }) {
    let base64Class = "";
    if (typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        base64Class = "remove-base-64";
    }

    return (
        <Img
         className={`${className} ${base64Class}`}
         {...props}
        />
    );
}
