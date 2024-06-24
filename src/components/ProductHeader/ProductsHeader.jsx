import React from 'react';
import productsHeader1 from '../../assets/productsHeader1.jpeg';
import productsHeader2 from '../../assets/productsHeader2.jpeg';
import productsHeader3 from '../../assets/productsHeader3.jpeg';
import productsHeader4 from '../../assets/productsHeader4.jpeg';
import './ProductsHeader.css';

const ProductsHeader = () => {
	const cards = [
		{
			image: productsHeader1,
			text: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
		},
		{
			image: productsHeader2,
			text: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
		},
		{
			image: productsHeader3,
			text: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
		},
		{
			image: productsHeader4,
			text: 'Sinovative (QINGDAO) Technology Development Co. Ltd',
		},
	];

	return (
		<div className='productsSection'>
			{cards.map((card, index) => (
				<div
					className='card'
					key={index}
				>
					<img
						src={card.image}
						alt={card.text}
						className='card-image'
					/>
					<div className='card-text'>
						<p>{card.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductsHeader;
