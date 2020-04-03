import React from 'react';
import SocialIcon from './SocialIcon';
import socials from '../constants/socials.json';
const Socials = () => {
  return (
    <>
      {socials.map((social) => (
        <SocialIcon name={social.name} link={social.link} key={social.name} />
      ))}
    </>
  );
};

export default Socials;
