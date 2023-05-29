import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
