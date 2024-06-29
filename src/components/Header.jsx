import React from 'react';
import SliderImage1 from '../assets/slider1.jpeg';
import SliderImage2 from '../assets/slider2.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Header.css';

const Header = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<Carousel
			responsive={responsive}
			autoPlay={true}
			autoPlaySpeed={3000} // Slide interval in milliseconds (3 seconds)
			infinite={true}
			showDots={false}
			arrows={true}
			removeArrowOnDeviceType={('tablet', 'mobile')}
		>
			<div>
				<img
					className='d-block w-100 HeaderSlide'
					src={SliderImage1}
					alt='First slide'
				/>
			</div>
			<div>
				<img
					className='d-block w-100 HeaderSlide'
					src={SliderImage2}
					alt='Second slide'
				/>
			</div>
		</Carousel>
	);
};

export default Header;
