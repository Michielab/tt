import React from "react";

import FaceBook from "react-icons/lib/fa/facebook";
import Twitter from "react-icons/lib/fa/twitter";
import Instagram from "react-icons/lib/fa/instagram";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/tamtamnl/" target="_blank">
        <FaceBook color="white" size={30} />
      </a>
      <a href="https://twitter.com/tamtamnl" target="_blank">
        <Twitter color="white" size={30} />
      </a>
      <a href="https://www.linkedin.com/company/tam-tam/" target="_blank">
        <Instagram color="white" size={30} />
      </a>
    </footer>
  );
};

export default Footer;
