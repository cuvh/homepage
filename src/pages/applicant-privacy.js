import React from "react";
import Meta from "components/Meta";
import TextLayout from "layouts/TextLayout";

export default function Terms() {
    return (
        <TextLayout title={"Applicant Privacy Policy"}>
            <Meta title={"Applicant Privacy Policy"} />

            <div className="text-page bottom-lg privacy-policy">
                <div className="bottom-md">
                    <small>Last updated: May 30, 2018</small>
                </div>
                <p>
                    <div className="m-bottom-1">
                        Knowing how we deal with your data as a job applicant is just as important
                        as how we deal with{" "}
                        <a
                         href="https://enhancv.com/privacy.html"
                         className="feature-link"
                         target="_blank">
                            our users’ data
                        </a>. When we refer to “we” and “us”, we mean Enhancv Ltd. Here is our
                        applicant privacy policy, which explains:
                    </div>
                    <ul>
                        <li>
                            What information we collect during the recruitment and selection
                            process;
                        </li>
                        <li>How we use it and who else has access to it;</li>
                        <li>How long we retain it;</li>
                        <li>Your legal rights.</li>
                    </ul>
                </p>

                <h5>What information do we collect?</h5>
                <p>
                    <div className="m-bottom-1">
                        The information you may share with us, or which we may acquire or produce
                        during the recruitment and selection process includes:
                    </div>
                    <ul>
                        <li>
                            Your name, email, physical address, phone number and other contact
                            information;
                        </li>
                        <li>
                            Your CV/resume, cover letter, previous or relevant (work) experience,
                            education, transcripts, and other information you provide to us in
                            support of your application or as part of our recruitment and selection
                            process;
                        </li>
                        <li>
                            Information from face-to-face, phone or online interviews if you have
                            such with us;
                        </li>
                        <li>
                            Details of the type of employment you are or may be looking for, desired
                            salary and other terms relating to compensation and benefits packages,
                            willingness to relocate, or other job preferences;
                        </li>
                        <li>
                            Details of how you heard about us or the position you are applying for;
                        </li>
                        <li>
                            Any sensitive or demographic information you share during the
                            application or recruitment process such as gender, information about
                            your citizenship or nationality. We keep this data to a minimum, when
                            possible.
                        </li>
                        <li>
                            Information we receive from references or background checks (where
                            applicable), including information provided by third parties;
                        </li>
                        <li>
                            Information about previous applications you may have made to us and any
                            previous work history with us.
                        </li>
                    </ul>
                </p>

                <h5>How do we use the information we collect?</h5>
                <p>
                    <div className="m-bottom-1">
                        We will use your information in order to carry out our recruitment and
                        selection process. This includes:
                    </div>

                    <ul>
                        <li>
                            Assessing the match between your skills, qualifications, attitude and
                            interests, on the one hand, and our business needs and company culture,
                            on the other;
                        </li>
                        <li>
                            Conducting reference and background checks (where applicable) in order
                            to verify your information;
                        </li>
                        <li>
                            Communicating with you regarding our recruitment and selection process
                            or your application. When suitable, we may also share with you
                            information about other potential career opportunities with us;
                        </li>
                        <li>
                            Creating or submitting reports as required under Bulgarian law and
                            regulations, where applicable;
                        </li>
                        <li>
                            Improving our recruitment and selection process in terms of inclusion
                            and diversity in recruitment practices. We are an equal opportunities
                            employer.
                        </li>
                    </ul>
                </p>
                <h5>Who else has access to your information</h5>

                <p>
                    <div className="m-bottom-1">
                        We take appropriate steps to protect your information that is collected,
                        processed, and stored as part of the recruitment and selection process. In
                        certain cases third parties may have partial or full access to your
                        information:
                    </div>

                    <ul>
                        <li>
                            third-parties whose services we use for internal communication and work
                            organization (including{" "}
                            <a
                             href="https://gsuite.google.com/intl/en/features/"
                             target="_blank"
                             className="feature-link">
                                Google
                            </a>{" "}
                            and{" "}
                            <a
                             href="http://slack.com/"
                             target="_blank"
                             className="feature-link">
                                Slack
                            </a>). Those services operate either within the EU or in accordance with
                            the{" "}
                            <a
                             href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en"
                             target="_blank"
                             className="feature-link">
                                EU-US Privacy Shield
                            </a>, ensuring the secure transfer of information;
                        </li>
                        <li>
                            partner organizations who are involved in the recruitment and selection
                            process, or are directly affected by our hiring decisions. We make sure
                            we collaborate only with trusted partners who are GDPR-compliant;
                        </li>
                        <li>
                            We may sometimes be required to disclose your information to external
                            third parties such as to local labour authorities and regulatory bodies
                            for the purpose of complying with applicable laws and regulations, or in
                            regard with a legal process
                        </li>
                    </ul>
                </p>

                <h5>Data retention</h5>

                <p>
                    We may retain your information in order to consider you for future job
                    opportunities with us. This period is no longer than three years after receiving
                    your information, as regulated by the Bulgarian law.
                </p>

                <p>
                    If you join our team as a full- or part-time employee or intern, we will keep
                    the information collected during the recruitment and selection process as part
                    of your employee’s record.
                </p>

                <h5>Your legal rights</h5>

                <p>
                    Under data protection laws you have rights in relation to your personal data
                    that include the right to request access, correction, erasure, restriction,
                    transfer, to object to processing, to portability of data and (where the lawful
                    ground of processing is consent) to withdraw consent.
                </p>

                <p>
                    If you wish to exercise any of the rights set out above, please email us at{" "}
                    <a
                     href="mailto:work@enhancv.com"
                     target="_blank"
                     className="feature-link">
                        work@enhancv.com
                    </a>. Please keep in mind, though, that some information may be retained if
                    required by law.
                </p>

                <p>
                    We try to respond to all legitimate requests within one month. Occasionally it
                    may take us longer than a month if your request is particularly complex or you
                    have made a number of requests. In this case, we will notify you.
                </p>

                <h5>Can this Job Applicant Privacy Policy change?</h5>

                <p>
                    We may update our Job Applicant Privacy Policy from time to time. We will
                    publish any updates on this same URL address.
                </p>
            </div>
        </TextLayout>
    );
}
