import React from 'react';
import Company_Culture from '../../assets/CompanyCulture.jpeg';

const CompanyCulture = () => {
	return (
		<>
			<div className='container-fluid'>
				<h4 className='header-text my-4'> Company Culture </h4>
				<p className='section-para'>Stop the war and make peace</p>
				<div className='CompanyCulture_Section'>
					<img
						style={{ width: '80vw' }}
						src={Company_Culture}
						alt='Company Culture'
					/>
				</div>
			</div>
		</>
	);
};

export default CompanyCulture;
