import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Login = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />

			<Box
				component="main"
				sx={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '10px',
				}}
			>
				<Grid
					xs={6}
					container
					sx={{
						borderRadius: '10px',
						width: { xs: '100%', md: '50%' },
					}}
					justifyContent={'center'}
					alignItems={'center'}
					flexDirection={'column'}
					spacing={2}
				>
					<Grid item>
						<Typography variant="h2">
							Experientes da Terra
						</Typography>
					</Grid>
				</Grid>
				<Grid
					xs={6}
					container
					sx={{
						borderRadius: '10px',
						width: { xs: '100%', md: '50%' },
					}}
					justifyContent={'center'}
					alignItems={'center'}
					flexDirection={'column'}
					spacing={2}
					paddingX={14}
				>
					<Grid item sx={{ width: '100%' }}>
						<TextField
							label="E-mail"
							fullWidth
							sx={{ borderRadius: '12px' }}
						/>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<TextField
							label="Senha"
							fullWidth
							sx={{ borderRadius: '12px' }}
						/>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Button
							variant="contained"
							fullWidth
							sx={{ borderRadius: '12px' }}
						>
							Entrar
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</React.Fragment>
	);
};

export default Login;
