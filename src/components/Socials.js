import React from "react";
import SocialIcon from "./SocialIcon";
import socials from "../constants/socials.json";
const Socials = () => {
  return (
    <React.Fragment>
      {socials.map((social) => (
        <SocialIcon name={social.name} link={social.link} key={social.name} />
      ))}
    </React.Fragment>
  );
};

export default Socials;
