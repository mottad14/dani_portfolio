import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../assets/header-pic.png'
import HeaderSocials from './HeaderSocials'
import {AiOutlineUser} from 'react-icons/ai'
import { CgPushRight } from 'react-icons/cg';

const Header = () => {
  return (
	    <header>
			<div className='container header__container'>
				<div className='header-name-wrapper'>
					<h2 style={{lineHeight:'0rem',fontSize:'1.5rem'}}><AiOutlineUser/></h2>
					<h2 className='hello'>Hello I'm</h2>
					<h1 className='myname'>Daniel Motta</h1>
					<h3 className='full-stack text-light'>Full Stack Software Engineer</h3>
				</div>
				<CTA />
				<HeaderSocials/>

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<div className='scrolldownflex'>
					<a href='#contact' className='scroll__down'>
						<span>Scroll Down</span> <CgPushRight style={{fontSize: '1.4rem'}}/>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header