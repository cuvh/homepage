import React from "react";

export default function Modal({ children, isModalShowed }) {
    return <div>{isModalShowed ? <div>{children}</div> : null}</div>;
}
