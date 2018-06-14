import React from "react";
import Helmet from "react-helmet";

import favicon from "assets/img/favicon.png";
import defaultMetaImage from "assets/img/new-social-image.jpg";

const SOCIAL_IMAGE_PREFIX = "https://enhancv.com";

export default function Meta({
    noFollow = false,
    metaImage = defaultMetaImage,
    description = "Enhancv resume builder helps you create a resume to be proud of. Stand out and make sure the key things come across.",
    title = "Enhancv | Professional Resume & CV Builder",
    ...rest
}) {
    metaImage = SOCIAL_IMAGE_PREFIX + metaImage;

    return (
        <Helmet
         {...rest}
         title={title}
        >
            <meta
             name="description"
             content={description}
            />
            <meta
             name="twitter:card"
             content="summary_large_image"
            />
            <meta
             name="twitter:site"
             content="@Enhancv"
            />
            <meta
             name="twitter:description"
             content={description}
            />
            <meta
             name="twitter:image:src"
             content={metaImage}
            />
            <meta
             property="og:image"
             content={metaImage}
            />
            <meta
             property="og:description"
             content={description}
            />
            {noFollow ? (
                <meta
                 name="robots"
                 content="noindex, nofollow"
                />
            ) : null}
            <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
            />

            <link
             rel="shortcut icon"
             type="image/png"
             href={favicon}
            />
            <link
             rel="icon"
             type="image/png"
             href={favicon}
            />
            <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/css?family=Roboto:100,400"
            />
        </Helmet>
    );
}
