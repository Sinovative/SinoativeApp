import React from 'react';
import productsHeader1 from '../assets/productsHeader1.jpeg';
import productsHeader2 from '../assets/productsHeader2.jpeg';
import productsHeader3 from '../assets/productsHeader3.jpeg';
import productsHeader4 from '../assets/productsHeader4.jpeg';

const ProductsHeader = () => {
	const cards = [
		{
			image: productsHeader1,
			text: 'Qingdao Huawu Rubber & Plastic Co., Ltd.',
		},
		{
			image: productsHeader2,
			text: 'Jintiecheng Intelligent Technology (Qingdao) Co., Ltd.',
		},
		{
			image: productsHeader3,
			text: 'Korute (Qingdao) Agricultural Machinery Co., Ltd.',
		},
		{
			image: productsHeader4,
			text: 'Qingdao Tianlun Professional Vehicle Co., Ltd.',
		},
	];

	return (
		<>
			<div className='row productsSection'>
				{cards.map((card, index) => (
					<div
						className='card col-3 p-0'
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
		</>
	);
};

export default ProductsHeader;
