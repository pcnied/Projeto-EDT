import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Welcome from '../../pages/Home';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
