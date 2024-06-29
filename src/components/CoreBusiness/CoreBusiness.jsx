import React from 'react';

import CoreBusiness1 from '../../assets/CoreBusiness_1.jpeg';
import CoreBusiness2 from '../../assets/CoreBusiness_2.jpeg';
import CoreBusiness3 from '../../assets/CoreBusiness_3.jpeg';
import CoreBusiness4 from '../../assets/CoreBusiness_4.jpeg';

import CoreBusiness_Logo_1 from '../../assets/CoreBusiness_Logo_1.png';
import CoreBusiness_Logo_2 from '../../assets/CoreBusiness_Logo_2.png';
import CoreBusiness_Logo_3 from '../../assets/CoreBusiness_Logo_3.png';
import CoreBusiness_Logo_4 from '../../assets/CoreBusiness_Logo_4.png';

import './Corebusiness.css';

const CoreBusiness = () => {
	const businesses = [
		{
			title: 'Business 1',
			image: CoreBusiness1,
			icon: CoreBusiness_Logo_1,
			description1: 'Because I am professional, you are safe',
			description2: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
			link: '#',
		},
		{
			title: 'Business 2',
			image: CoreBusiness2,
			icon: CoreBusiness_Logo_2,
			description1: 'Professional, dedicated, dedicated service',
			description2: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
			link: '#',
		},
		{
			title: 'Business 3',
			image: CoreBusiness3,
			icon: CoreBusiness_Logo_3,
			description1:
				'Delivering the driving force for progress and shouldering social responsibility',
			description2: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
			link: '#business3',
		},
		{
			title: 'Business 4',
			image: CoreBusiness4,
			icon: CoreBusiness_Logo_4,
			description1:
				'Serve customers, integrate resources, and create dreams',
			description2: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
			link: '#business4',
		},
	];

	return (
		<section className='coreBusinessSection'>
			<h4 className='my-2 header-text'>Four Core Businesses</h4>
			<p className='section-para'>
				Technology as the driving force and quality as the eternal
			</p>
			<div className='container-fluid'>
				<div className='row'>
					{businesses.map((business, index) => (
						<div
							key={index}
							className='col-12 col-md-6 mb-4'
						>
							<a
								href={business.link}
								className='card h-100 card-link'
							>
								<div className='image-container'>
									<img
										src={business.image}
										alt={business.title}
										className='card-img-top'
									/>
								</div>
								<div className='card-body row'>
									<img
										src={business.icon}
										alt={`${business.title} icon`}
										className='mb-2 col-2'
									/>
									<div className='col-10'>
										<p className='card-text'>
											{business.description1}
										</p>
										<p className='card-text'>
											{business.description2}
										</p>
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoreBusiness;
