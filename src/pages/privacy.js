import React from "react";
import Helmet from "react-helmet";
import TextLayout from "../layouts/TextLayout";

export default function Terms() {
    return (
        <TextLayout title={"Privacy Policy"}>
            <Helmet title={"Privacy Policy"} />

            <div className="text-page bottom-lg">
                <div className="bottom-md">
                    <small>Last updated: May 12, 2016</small>
                </div>

                <p>
                    Resumes are deeply personal documents which reveal a lot
                    about you. Enhancv values your privacy, so we've developed
                    an easy to understand Privacy Policy that covers how we
                    collect and use your information. Let us know if you have
                    any questions.
                </p>

                <h5>Information we collect</h5>
                <p>
                    ​We receive and store two types of data:{" "}
                    <em>Personal Information</em> — data you knowingly provide
                    (e.g. your resume information) which can be used to identify
                    you; <em>Non-Personal Information</em> — data we
                    automatically receive and store without linking it to your
                    account (e.g. your IP address, pages you visit.) Find some
                    examples below.
                </p>

                <h5>Personal Information</h5>
                <p>
                    <ul>
                        <li>Your resume content.</li>
                        <li>
                            Account and payment data such as, but not limited
                            to, your name, email address, industry and
                            experience level, billing address, phone number and
                            credit card information. Payments are processed by a
                            Level 1 PCI DSS compliant third-party and your
                            credit card info is safely stored with them. To
                            comply with European Tax Law we store your IP
                            address together with your invoice data, so that we
                            pay tax accordingly.
                        </li>
                        <li>
                            When you invite others to join Enhancv, we store the
                            information you provide about those people.
                        </li>
                        <li>
                            Communication between you and members of our team.
                        </li>
                        <li>
                            If you sign-up with Facebook or LinkedIn, we store
                            your profile data from the respective service.
                        </li>
                    </ul>
                </p>

                <h5>Non-Personal Information</h5>
                <p>
                    <ul>
                        <li>
                            Product usage information such as which pages you
                            visit and what features you try (incl. buttons you
                            clicked, in what sequence and how many times). This
                            data is aggregated and helps us understand which
                            parts of our product are of greatest interest.
                        </li>
                        <li>
                            Server access logs with your IP address as well as
                            error logs which may collect more data, so that we
                            are able to fix bugs.
                        </li>
                    </ul>
                </p>

                <h5>How We Use Your Information</h5>
                <p>
                    <ul>
                        <li>
                            Keep you posted on latest product announcements and
                            campaigns. You can opt-out from those updates
                            anytime through the “unsubscribe” link. You will
                            continue receiving important account-related
                            messages.
                        </li>
                        <li>
                            Understand and discover patterns in customer
                            behavior which helps us improve our product and
                            develop new features. Enhancv does not respond to Do
                            Not Track (DNT) signals, however, you can opt-out of
                            product analytics tracking through the “Settings”
                            page.
                        </li>
                        <li>
                            Test, develop and improve our automated
                            resume-grading and mistake-detection features.
                            Enhancv might sent you machine-generated suggestions
                            on how to improve your resume content.
                        </li>
                    </ul>
                </p>

                <h5>Data Disclosure</h5>
                <p>
                    Enhancv won’t share your Personal Information without your
                    explicit consent. We use third-party tools which perform
                    services (e.g. customer communication, payment processing)
                    on our behalf and are obliged to protect the partial data we
                    share with them. Enhancv will also share records if required
                    by law enforcement.
                </p>

                <h5>Integrity of Personal Information</h5>
                <p>
                    We make it easy for you to keep your personal information
                    up-to-date. You can also delete your profile through the
                    “Settings” page.
                </p>

                <h5>Cookies and Other Technologies</h5>
                <p>
                    Our platform uses cookies and HTML5 browser local storage to
                    save your preferences, authenticate you and track new users
                    who arrived through an enhancv.biz link. The third-party
                    services we use might also use cookies, pixel tags and other
                    similar technologies.
                </p>

                <h5>Changes</h5>
                <p>
                    We may update our Privacy Policy from time to time. We will
                    notify you whenever we change the policy in a material way.
                </p>
            </div>
        </TextLayout>
    );
}
