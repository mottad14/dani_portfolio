import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {FiFacebook,FiLinkedin,FiGithub,FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> */}
        <a href="https://www.linkedin.com/in/mottad14/" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/mottad14" target="_blank"><FiGithub/></a>
        <a href="https://www.facebook.com/mottad14" target="_blank"><FiFacebook/></a>
        <a href="#contact"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials