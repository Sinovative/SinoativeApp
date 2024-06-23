import React from 'react';

import Header from '../components/Header';
import CoreBusiness from '../components/CoreBusiness';
import CompanyCulture from '../components/CompanyCulture';
import TyreCollection from '../components/TyreCollection';

const Home = () => {
	return (
		<>
			<section className='header'>
				<Header />
			</section>

			<section className='core_business'>
				<CoreBusiness />
			</section>

			<section>
				<CompanyCulture />
			</section>
			<div className=''>
				<TyreCollection />
			</div>
		</>
	);
};

export default Home;
