import { Grid } from '@mui/material';
import React from 'react';

import Footer from '../../components/Footer';
import HomeTitle from '../../components/HomeTitle';
import NavBar from '../../components/NavBar';

const Home = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Grid container sx={{ height: '100vh', justifyContent: 'center' }}>
				<Grid xs={12} item sx={{ height: '10px' }}></Grid>
				<Grid item sx={{ width: '100%' }}>
					<HomeTitle title="CATEGORIAS" />
					<HomeTitle title="PRODUTOS" />
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
