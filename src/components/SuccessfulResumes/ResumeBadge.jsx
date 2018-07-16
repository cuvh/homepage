import React from "react";

export default function ResumeBadge({ label }) {
    let color = "orange";

    if (label === "New Role") {
        color = "green";
    }

    if (label === "Career Change") {
        color = "purple";
    }

    if (label === "Industry Switch") {
        color = "yellow";
    }

    return <span className={`resumes--badge badge--${color}`}>{label}</span>;
}
