import React from "react";
import Meta from "components/Meta";
import TextLayout from "layouts/TextLayout";
import Link from "gatsby-link";

export default function Terms() {
    return (
        <TextLayout title={"Terms of service"}>
            <Meta title="Terms of service" />

            <div className="text-page m-bottom-12">
                <div className="m-bottom-6">
                    <small>Last updated: October 5, 2017</small>
                </div>

                <h5>Welcome to Enhancv</h5>
                <p>
                    ​Thanks for using our platform and trusting us with your career goals. This
                    website and platform ("Services") are provided by Enhancv Ltd. ("us", "we", or
                    "our").
                    <br />
                    <br />
                    By using Enhancv or accessing any of our Services, you are agreeing to the
                    following terms. Please read them carefully and contact us if you have any
                    questions.
                </p>

                <h5>Accounts</h5>
                <p>
                    When you create an account on Enhancv, you are fully responsible for maintaining
                    its security and any activities that occur under your account. Please, use a
                    "strong" password (or authenticate via a third-party) to ensure that your
                    private information, your resumes and billing information are safe.
                    <br />
                    <br />
                    We cannot and will not be liable for any loss or damage arising from your
                    failure to comply with the above requirements.
                </p>

                <h5>Content</h5>
                <p>
                    You are solely responsible for all the content you create using our Services. We
                    may review content to determine whether it violates our policies, and we may
                    remove content in those cases. But that does not necessarily mean that we review
                    content, so please don’t assume that we do.
                </p>

                <h5>Fees, Payments and Refunds</h5>
                <p>
                    Enhancv reserves the right to require payment or subscription fees for any of
                    our Services. For monthly subscription plans, you will be billed in advance. The
                    prices may be changed at any time, upon thirty (30) day prior notice to you,
                    which may be sent by email or posted on the website. Your use of the Services
                    following such notification constitutes your acceptance of any new or increased
                    charges. Any monthly fees paid hereunder are non-refundable and non-cancelable.
                    Quarterly and Semi-annual fees are eligible for a partial pro-rated refund.
                    <br />
                    <br />
                    Downgrading your plan may cause the loss of features, or capacity of your
                    Account. Enhancv does not accept any liability for such loss.
                </p>

                <h5>Trials &amp; Discounts</h5>
                <p>
                    Any trial or reduced pricing (promocode) must be used within the specified time.
                    You must cancel your account before the end of the trial period to avoid being
                    charged a subscription fee. We reserve the right to limit you to one free trial
                    or a single promocode as well as to prohibit the combination of trials,
                    promocodes, and other offers (such as inviting friends). Credit accumulated
                    through inviting friends cannot be exchanged, refunded, replaced or redeemed for
                    cash. All promocode-reduced fees are non-refundable and non-cancelable.
                </p>

                <h5>Cancellation</h5>
                <p>
                    If you no longer need our Service, for example after you have found an amazing
                    new job, it is solely your responsibility to cancel the subscription (through
                    the Billing page) before the next billing date. 7 days in advance, we send out
                    an automated email as a reminder if you wish to cancel. We are not able to
                    respond to cancellation requests via email, nor to issue a refund if you were
                    not able to cancel (unless there is evidence of a technical issue on our side
                    that prevented you from cancelling).
                </p>

                <h5>Termination</h5>
                <p>
                    Enhancv, in its sole discretion, has the right to terminate your account for any
                    reason at any time. Such termination of the Services will result in the
                    deactivation or deletion of your account and the forfeiture and relinquishment
                    of all content in your account. In such cases, you are not eligible for any
                    refunds.
                    <br />
                    <br />
                    If you wish to terminate your account, you may do so through the Account page.
                </p>

                <h5>Privacy</h5>
                <p>
                    Your personal information and content is governed by our{" "}
                    <Link to="/privacy">Privacy Policy</Link>. By using Enhancv, you agree to our{" "}
                    <Link to="/privacy">Privacy Policy</Link>.
                </p>

                <h5>Limited Warranties and Liability</h5>
                <p>
                    Enhancv does not make any warranty about the reliability of the Services and
                    does not guarantee the security of user data despite best efforts. The Service
                    is provided “AS IS” and you agree to not hold us responsible nor to seek
                    indemnification for any damages that may arise as a result of the loss of use,
                    data, or profits connected to the performance of the Services or failure in such
                    performance.
                </p>

                <h5>Governing Law</h5>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of
                    Bulgaria, without regard to its conflict of law provisions.
                    <br />
                    <br />
                    Our failure to enforce any right or provision of these Terms will not be
                    considered a waiver of those rights. If any provision of these Terms is held to
                    be invalid or unenforceable by a court, the remaining provisions of these Terms
                    will remain in effect. These Terms constitute the entire agreement between us
                    regarding our Service, and supersede and replace any prior agreements we might
                    have between us regarding the Service.
                </p>

                <h5>Changes</h5>
                <p>
                    We reserve the right to modify these terms at any time. If a revision is
                    material, we will try to provide at least 15 days notice prior to any new terms
                    taking effect. What constitutes a material change will be determined at our sole
                    discretion. By continuing to access or use our Service after those revisions
                    become effective, you agree to be bound by the revised terms. If you do not
                    agree to the new terms, please stop using the Service.
                </p>
            </div>
        </TextLayout>
    );
}
