import { Grid, Typography } from '@mui/material';
import React from 'react';

import MyFooter from '../../components/Footer';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/ProductCard';

const Welcome: React.FC = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Grid
				container
				sx={{ padding: '20px' }}
				spacing={2}
				// justifyContent="center"
			>
				<Grid xs={12} item>
					<Typography component={'h1'} variant="h4">
						PRODUTOS
					</Typography>
				</Grid>
				<Grid item>
					<CardProduct />
				</Grid>
				<Grid item>
					<CardProduct />
				</Grid>
				<Grid item>
					<CardProduct />
				</Grid>
				<Grid item>
					<CardProduct />
				</Grid>
				<Grid item>
					<CardProduct />
				</Grid>
			</Grid>
			<MyFooter />
		</React.Fragment>
	);
};

export default Welcome;
