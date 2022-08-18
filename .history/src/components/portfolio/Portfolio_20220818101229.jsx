import React from 'react'
import './portfolio.css'
import IMG1 from '../assets/portfolio1.png';
import IMG3 from '../assets/portfolio2.png'
import IMG2 from '../assets/portfolio3.png';
import IMG4 from '../assets/portfolio4.png'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.png'
import { BiGitBranch } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
	{
		id: 1,
		image: IMG1,
		title: `YumBuns - React, Express, MongoDB, Firebase`,
		github: 'https://github.com/mottad14/yumBuns',
		target: '_blank',
		demo: 'http://ec2-18-191-144-79.us-east-2.compute.amazonaws.com/?',
	},
	{
		id: 2,
		image: IMG2,
		title: `Daniel Motta [Portfolio] - "MERN"`,
		github: 'https://github.com',
		target: '_self',
		demo: '#',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Dojo Meet Up - C# ASP.NET Core',
		github: 'https://github.com',
		target: '_blank',
		demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
	{
		id: 4,
		image: IMG4,
		title: 'CarBubble - C# ASP.NET Core Bootstrap',
		github: 'https://github.com',
		target: '_blank',
		demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress',
	}
];


const Portfolio = () => {
  return (
		<section id='portfolio'>
			<h2
				style={{
					lineHeight: '0rem',
					fontSize: '1.5rem',
					color: 'rgba(255, 255, 255, 0.6)',
					marginBottom: '0.2rem',
					paddingTop: '10px',
				}}>
				<BiGitBranch />
			</h2>
			<h4>My Recent Work</h4>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo , target}) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a href={github} className='btn' target='_target'>
									<FiGithub/> Github
								</a>
								<a href={demo} className='btn btn-primary' target={target}>
									Web Site
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Portfolio