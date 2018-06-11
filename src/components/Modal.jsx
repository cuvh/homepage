import React from "react";

export default function Modal({ children, isModalShowed }) {
    return (
        <div>
            {isModalShowed ? (
                <div>
                    <div
                     tabIndex="-1"
                     className={isModalShowed ? "modal in" : "modal fade"}
                    >
                        {children}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
