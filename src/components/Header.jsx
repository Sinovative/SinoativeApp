import React from 'react';

import SliderImage1 from '../assets/slider1.jpg';
import SliderImage2 from '../assets/slider2.jpg';

const Header = () => {
	return (
		<div
			id='carouselSection'
			className='carousel slide'
			data-bs-ride='carousel'
			data-bs-interval='3000' // Slide interval in milliseconds (3 seconds)
		>
			<ul className='carousel-indicators'>
				<li
					data-bs-target='#carouselSection'
					data-bs-slide-to='0'
					className='active'
				></li>
				<li
					data-bs-target='#carouselSection'
					data-bs-slide-to='1'
				></li>
			</ul>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						className='d-block w-100'
						src={SliderImage1}
						alt='First slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={SliderImage2}
						alt='Second slide'
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
