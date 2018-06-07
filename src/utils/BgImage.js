import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`;

export default BgImage;
