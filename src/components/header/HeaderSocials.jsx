import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/godwin-muthomi-6978541b4/?originalSubdomain=ke'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/Godwin45/' target='_blank'>
        <FaGithub />
      </a>
      <a
        href='https://www.youtube.com/channel/UCo4Q4J0PtPa-qxODTshQNcg'
        target='_blank'
      >
        <ImYoutube2 />
      </a>
    </div>
  );
};

export default HeaderSocials;
