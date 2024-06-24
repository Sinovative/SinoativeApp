import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductsHeader from '../components/ProductHeader/ProductsHeader';
import ProductList from '../components/ProductList/ProductList';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Products = () => {
	const query = useQuery();
	const id = query.get('id');

	return (
		<>
			<div className='container-fluid overflow-x-hidden'>
				<section>
					<ProductsHeader />
				</section>
				<section>
					<h4 className='header-text my-4'>
						{id === null || id === '1'
							? 'Motercycle Tires'
							: id === '2'
							? 'Electric Tires'
							: id === '3'
							? 'Three-wheeler Tires'
							: id === '4'
							? 'Beach Tires ATV/UTV'
							: id === '5'
							? 'Recreational Vehicle Tires'
							: 'Inner Tubes'}
					</h4>
				</section>

				<section>
					<ProductList Categoryid={id === null ? 1 : id} />
				</section>
			</div>
		</>
	);
};

export default Products;
