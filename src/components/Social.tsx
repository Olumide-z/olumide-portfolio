import Link from 'next/link';
import React from 'react'

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp, FaGitlab } from  'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Olumide-z"},
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/olumide-ilesanmi-10026a207/"},
  { icon: <FaWhatsapp />, path: "https://wa.me/2349169265887"},
  { icon: <FaGitlab />, path: "https://gitlab.com/Olumide-Ilesanmi"},
]

interface socialsProps {
  containerStyles: any;
  iconStyles: any
}

const Social = ({ containerStyles, iconStyles }: socialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
          <a key={index} href={item.path} className={iconStyles} target='_blank' rel="noreferrer">
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social
