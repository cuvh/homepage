import React from "react";
import classnames from "classnames";

const BASIC = "basic";
const PRO = "pro";

export default function PricingTabs({ type, onChange }) {
    return (
        <div className="pricing-tab-switch">
            <a
             href="#basic"
             data-track="event"
             data-category="Pricing V2"
             data-action="Tab Change"
             data-label="Basic"
             className={classnames("btn switch-button", {
                focused: type === BASIC,
             })}
             onClick={() => onChange(BASIC)}>
                BASIC
            </a>

            <a
             href="#pro"
             data-track="event"
             data-category="Pricing V2"
             data-action="Tab Change"
             data-label="Pro"
             className={classnames("btn switch-button", {
                focused: type === PRO,
             })}
             onClick={() => onChange(PRO)}>
                PRO
            </a>
        </div>
    );
}
