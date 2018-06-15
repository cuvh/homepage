import React from "react";
import Img from "gatsby-image";

export default function Image({ ...props }) {
    let base64Class = "";
    if (typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.platform)) {
        base64Class = "remove-base-64";
    }

    return (
        <Img
         className={base64Class}
         {...props}
        />
    );
}
