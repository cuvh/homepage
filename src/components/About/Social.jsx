import React from "react";

import teslaLogo from "assets/img/about/tesla@2x.png";
import spotifyLogo from "assets/img/about/spotify@2x.png";
import facebookLogo from "assets/img/about/facebook@2x.png";
import googleLogo from "assets/img/about/google@2x.png";
import intercomLogo from "assets/img/about/intercom@2x.png";

export default function Social() {
    return (
        <div className="social-container p-top-10 m-top-8 m-left-16">
            <div className="users-container p-right-16">
                <p className="users-count m-bottom-0">500 000+</p>
                <p className="users-global">
                    global
                    <span className="noticed-users"> users noticed & hired </span>
                    by great companies
                </p>
            </div>
            <div className="companies-container text-center m-left-8">
                <div className="top-companies">
                    <div className="logo-container text-center">
                        <img
                         className="tesla-logo"
                         src={teslaLogo}
                         alt="Tesla logo"
                        />
                    </div>
                    <div className="logo-container text-center">
                        <img
                         className="google-logo"
                         src={googleLogo}
                         alt="Google logo"
                        />
                    </div>
                    <div className="logo-container text-center">
                        <img
                         className="facebook-logo"
                         src={facebookLogo}
                         alt="Facebook logo"
                        />
                    </div>
                </div>
                <div className="bottom-companies">
                    <div className="logo-container text-center">
                        <img
                         className="spotify-logo"
                         src={spotifyLogo}
                         alt="Spotify logo"
                        />
                    </div>
                    <div className="logo-container text-center">
                        <img
                         className="intercom-logo"
                         src={intercomLogo}
                         alt="Intercom logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
