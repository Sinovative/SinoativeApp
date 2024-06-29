import React, { useState, useEffect } from 'react';
import {  } from "module";
import './ProductList.css';
const ProductList = ({ Categoryid }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [productData, setProductData] = useState([]);
	const productsPerPage = 12;

	useEffect(() => {
		const Imagepath = '/images/MoterCycle_Image';
		const data = Array.from({ length: 19 }, (_, i) => ({
			id: i + 1,
			imageID: `img${i + 1}`,
			productImage: `${Imagepath}_${i + 1}.jpeg`,
			Categoryid: 1, // Assuming all products have Categoryid 1 for this example
			slno: `SLN-${i + 1000}`,
		}));
		setProductData(data);
	}, [Categoryid]);

	useEffect(() => {
		if (Categoryid !== null) {
			const filtered = productData.filter(
				(product) => product.Categoryid == Categoryid
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(productData); // Show all products if Categoryid is null
		}
		setCurrentPage(1); // Reset to first page when category filter changes
	}, [Categoryid, productData]);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div className='container ProductsListContainer'>
			<div className='row row-cols-1 row-cols-md-4'>
				{currentProducts.map((product) => (
					<div
						className='col mt-4'
						key={product.id}
					>
						<div className='d-flex flex-column px-3'>
							<div className='card'>
								<span className='text-center card-text pt-3'>
									{product.slno}
									<hr className='ProductList_hr' />
								</span>
								<img
									src={product.productImage}
									alt={`Product ${product.id}`}
									className='p-4 card-img'
								/>
								<button className='btn btn-primary mx-4 my-3 ProductListButton'>
									Learn More
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='d-flex justify-content-center align-items-center my-4 py-4'>
				<button
					onClick={handlePreviousPage}
					className={
						currentPage === 1
							? 'btn btn-secondary PrevBtn px-4 mx-4'
							: 'btn btn-primary NextBtn px-4 mx-4'
					}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<span className='px-4 py-2'>
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNextPage}
					className={
						currentPage === totalPages
							? 'btn btn-secondary px-4 mx-4'
							: 'btn btn-primary px-4 mx-4'
					}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProductList;
