import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import MoterCycleTyres from '../../assets/MotercycleTyres.jpeg';
import { NavLink } from 'react-router-dom';

import './TyreCollection.css';

const TyreCollection = () => {
	const tyres = [
		{
			id: 1,
			image: MoterCycleTyres,
			text: 'MoterCycle Tires',
		},
		{
			id: 2,
			image: MoterCycleTyres,
			text: 'Electric Tires',
		},
		{
			id: 3,
			image: MoterCycleTyres,
			text: 'Three-Wheeler Tires',
		},
		{
			id: 4,
			image: MoterCycleTyres,
			text: 'Beach Tires ATV/UTV',
		},
		{
			id: 5,
			image: MoterCycleTyres,
			text: 'Recreational Vehicle Tires',
		},
		{ id: 6, image: MoterCycleTyres, text: 'Inner Tube ' },
	];

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<div className='TyreContainer'>
				<h4 className='my-2 header-text'>Tire Collection </h4>
				<p className='section-para'>Check our latest collections </p>
			</div>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				customTransition='all 2s ease-in-out'
				keyBoardControl={true}
				transitionDuration={4000}
				containerClass='carousel-container'
				deviceType='desktop'
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
			>
				{tyres.map((tyre) => (
					<div
						className='tyre-card mx-2'
						key={tyre.id}
					>
						<div
							className='card-img'
							style={{ backgroundImage: `url(${tyre.image})` }}
						>
							<div className='tyre-info'>
								<p>{tyre.text}</p>
								<NavLink
									to={{
										pathname: '/products',
										search: `?id=${tyre.id}`,
									}}
									className='btn btn-primary'
								>
									Learn More
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
};

export default TyreCollection;
