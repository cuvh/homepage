import React from "react";
import Helmet from "react-helmet";

import favicon from "assets/img/favicon.png";
import defaultMetaImage from "assets/img/new-social-image.jpg";

export default function Meta({
  noFollow = false,
  metaImage = defaultMetaImage,
  description = "Enhancv resume builder helps you create a resume to be proud of. Stand out and make sure the key things come across.",
  title = "Enhancv | Professional Resume & CV Builder",
  ...rest
}) {
  const noFollowProp = noFollow
    ? [
        {
          name: "robots",
          content: "noindex, nofollow"
        }
      ]
    : [];

  return (
    <Helmet
     {...rest}
     title={title}
     meta={[
      {
        name: "description",
        content: description
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@Enhancv"
      },
      {
        itemprop: "image",
        content: metaImage
      },
      { name: "twitter:image", content: metaImage },
      {
        property: "og:image",
        content: metaImage
      },
      {
        name: "twitter:description",
        content: description
      },
      {
        property: "og:description",
        content: description
      },
      ...noFollowProp
     ]}
    >
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
