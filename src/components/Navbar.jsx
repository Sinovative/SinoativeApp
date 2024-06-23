import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
	const [activeLink, setActiveLink] = useState('Home');

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Products', path: '/products' },
		{ name: 'About', path: '/about' },
		{ name: 'Gallery', path: '/gallery' },
		{ name: 'Contact Us', path: '/contact' },
	];

	return (
		<nav>
			<div className='logo'>
				<img
					src={Logo}
					alt='Brand'
				/>
			</div>
			<ul>
				{links.map((link) => (
					<li
						key={link.name}
						onClick={() => setActiveLink(link.name)}
					>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
						>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
