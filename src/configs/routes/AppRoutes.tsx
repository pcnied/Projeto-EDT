import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Welcome from '../../pages/Home';
import Profile from '../../pages/Profile';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/perfil" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
