import React from 'react';

import Home from './Pages/Home';
import Products from './Pages/Products';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<>
			<div className='container-fluid'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/products'
						element={<Products />}
					/>
					<Route
						path='/about'
						element={<AboutUs />}
					/>
					<Route
						path='/contact'
						element={<ContactUs />}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	);
};

export default App;
