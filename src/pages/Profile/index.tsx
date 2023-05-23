import { AccountCircle } from '@mui/icons-material';
import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';

import NavBar from '../../components/NavBar';

const Profile = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Grid
				container
				justifyContent={'center'}
				alignItems={'center'}
				height={'100vh'}
				spacing={2}
			>
				<Grid item xs={4}>
					<Box
						sx={{
							width: '100%',
							background: 'red',
							height: '70vh',
						}}
					>
						<IconButton size="large" color="inherit">
							<AccountCircle />
						</IconButton>
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box
						sx={{
							width: '100%',
							background: 'blue',
							height: '70vh',
						}}
					></Box>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Profile;
