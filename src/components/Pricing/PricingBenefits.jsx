import React from "react";

import iconArticle from "../../assets/img/pricing/icon_article.svg";
import iconEntries from "../../assets/img/pricing/icon_entries.svg";
import iconSections from "../../assets/img/pricing/icon_sections.svg";
import iconDesign from "../../assets/img/pricing/icon_design.svg";
import iconBrandingDisabled from "../../assets/img/pricing/icon_branding_disabled.svg";
import iconBrandingPro from "../../assets/img/pricing/icon_branding_pro.svg";
import iconCompactDisabled from "../../assets/img/pricing/icon_compact_disabled.svg";
import iconCompactPro from "../../assets/img/pricing/icon_compact_pro.svg";

export default function PricingBenefits({ type, changeToPro }) {
    return (
        <div className="pricing-benefits">
            <div className="container">
                {type === "basic" ? (
                    <div className="m-bottom-10 basic-benefits">
                        <h5 className="m-bottom-5 m-top-9 text-center animate-in">
                            What’s included in Basic
                        </h5>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconArticle}
                                     alt="Single resume represented by a resume icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">1 resume</div>
                                    <div className="pricing-benefits-description">
                                        Make unlimited changes and download the resume as many times
                                        as you want.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconEntries}
                                     alt="15 entries max represented by a lines icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Up to 15 entries</div>
                                    <div className="pricing-benefits-description">
                                        Show the most relevant points of your personal and
                                        professional experience.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     className="pricing-active"
                                     src={iconSections}
                                     alt="Basic sections badge icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Basic sections</div>
                                    <div className="pricing-benefits-description">
                                        Add the key information about you, like experience,
                                        education, and more.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconDesign}
                                     alt="Memorable design represented by a diamond icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Memorable design</div>
                                    <div className="pricing-benefits-description">
                                        Customize colors, fonts, and icons and make sure your resume
                                        is never bland.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in pricing-locked">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconBrandingDisabled}
                                     alt="Remove branding feature not included represented by an eye icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">
                                        Remove branding <span className="pro-tag">PRO</span>
                                    </div>
                                    <div className="pricing-benefits-description">
                                        Get the full credit for your resume by removing the Enhancv
                                        logo on the page.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in pricing-locked">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconCompactDisabled}
                                     alt="Compact template feature not included represented by a compact content icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">
                                        Compact template <span className="pro-tag">PRO</span>
                                    </div>
                                    <div className="pricing-benefits-description">
                                        Use a visually appealing layout that fits more information
                                        in one page.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                         className="text-center animate-in"
                         style={{ width: "100%" }}>
                            <h5>Get up to 10 resumes, unlimited entries and Pro sections</h5>
                            <div className="m-top-3">
                                <a
                                 href="#"
                                 onClick={() => changeToPro()}
                                 className="btn btn-primary btn-lg btn-basic-to-pro">
                                    Learn more about Pro
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="m-bottom-10 pro-benefits">
                        <h5 className="m-bottom-5 m-top-9 text-center animate-in">
                            What’s included in Pro
                        </h5>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconArticle}
                                     alt="Up to 10 resumes represented by a multiple resumes icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Up to 10 resumes</div>
                                    <div className="pricing-benefits-description">
                                        Make changes to your resume and tailor to a specific
                                        position in a matter of minutes.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconEntries}
                                     alt="Unlimited entries represented by a lines icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Unlimited entries</div>
                                    <div className="pricing-benefits-description">
                                        Add more of your personal and professional experience to
                                        prove your culture fit.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconSections}
                                     alt="Pro sections badge icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Pro sections</div>
                                    <div className="pricing-benefits-description">
                                        Show certificates, awards, references, and more, so that
                                        your achievements come across.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     src={iconDesign}
                                     alt="Memorable design represented by a diamond icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Memorable design</div>
                                    <div className="pricing-benefits-description">
                                        Customize colors, fonts, and icons and make sure your resume
                                        is never bland.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Grid Grid--alignCenter">
                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 Grid-cell--sm-offset-1 Grid-cell--md-offset-2 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     className="pricing-active"
                                     src={iconBrandingPro}
                                     alt="Remove branding feature represented by an eye icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Remove branding</div>
                                    <div className="pricing-benefits-description">
                                        Get the full credit for your resume by removing the Enhancv
                                        logo on the page.
                                    </div>
                                </div>
                            </div>

                            <div className="Grid Grid-cell--sm-5 Grid-cell--md-4 m-bottom-5 animate-in">
                                <div className="Grid-cell--xs-2 pricing-icon">
                                    <img
                                     className="pricing-active"
                                     src={iconCompactPro}
                                     alt="Compact template feature represented by a compact content icon"
                                    />
                                </div>
                                <div className="Grid-cell--xs-10 benefits-padding">
                                    <div className="pricing-benefits-title">Compact template</div>
                                    <div className="pricing-benefits-description">
                                        Use a visually appealing layout that fits more information
                                        in one page.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
