import React from 'react';
import phoneLogo from '../../assets/phone-solid.svg';
import location from '../../assets/location-dot-solid.svg';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer row text-white '>
			<div className='col-5'>
				<h4>Contact Us</h4>
			</div>
			<div className='col-7'>
				<section className='mx-2'>
					<span>
						<img
							src={phoneLogo}
							className='phoneLogo '
							alt=''
						/>
					</span>
					<span className=''>
						<h5 className='pt-2'>(+86) 190-5058-8278</h5>
					</span>
				</section>
				<section className='mx-2 d-flex align-items-center justify-content-start location'>
					<span>
						<img
							src={location}
							className='phoneLogo'
							alt=''
						/>
					</span>
					<span className=''>
						<h5 className='pt-2 text-start'>
							Sinovative (QINGDAO) Technology Development Co. Ltd
							<br />
							Room 102, Unit 2, Xifuyuanzhu East, <br /> Huangdao
							District, Qingdao City Shandong Province,
							<br />
							China
						</h5>
					</span>
				</section>
			</div>
		</div>
	);
};

export default Footer;
