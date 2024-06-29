import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
	const [activeLink, setActiveLink] = useState('Home');
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Products', path: '/products' },
		{ name: 'About', path: '/about' },
		{ name: 'Gallery', path: '/gallery' },
		{ name: 'Contact Us', path: '/contact' },
	];

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className={`navbar ${menuOpen ? 'open' : ''} px-2 my-2`}>
			<div className='logo'>
				<NavLink to={'/'}>
					<img
						src={Logo}
						alt='Brand'
					/>
				</NavLink>
			</div>
			<button
				className='burger'
				onClick={handleMenuToggle}
			>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</button>
			<ul className={`menu ${menuOpen ? 'active' : ''}`}>
				{links.map((link) => (
					<li
						key={link.name}
						onClick={() => {
							setActiveLink(link.name);
							setMenuOpen(false); // Close menu on link click
						}}
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
