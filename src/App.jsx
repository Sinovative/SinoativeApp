import React from 'react';

import Home from './Pages/Home';
import Products from './Pages/Products';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { Route, Routes } from 'react-router-dom';
import './App.css';

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
					<Route
						path='*'
						element={<div>404 Not Found</div>}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	);
};

export default App;
