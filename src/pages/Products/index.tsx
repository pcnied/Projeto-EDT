import { Grid, Typography } from '@mui/material';
import React from 'react';

import CardProduct from '../../components/CardProduct';
import MyFooter from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Products: React.FC = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Grid
				container
				sx={{ padding: '20px' }}
				spacing={2}
				justifyContent="center"
			>
				<Grid xs={12} item>
					<Typography
						component={'h1'}
						variant="h4"
						fontWeight={'bold'}
					>
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

export default Products;
