import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Grid, Icon, Typography } from '@mui/material';
import React from 'react';

import UserSvg from '../../../public/assets/user.svg';
import MyFooter from '../../components/Footer';
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
							zIndex: '-1',
							width: '100%',
							background: '#ccc',
							opacity: '0.8',
							borderRadius: '10px',
							height: '70vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Box
							component={'img'}
							src={UserSvg}
							sx={{
								width: '40%',
								zIndex: '1',
							}}
						/>
						<Grid
							container
							flexDirection={'column'}
							alignItems={'center'}
							marginTop={'20px'}
							spacing={1}
						>
							<Grid item display={'flex'}>
								<Icon>
									<HomeRoundedIcon />
								</Icon>
								<Typography>Home</Typography>
							</Grid>
							<Grid item display={'flex'}>
								<Icon>
									<HomeRoundedIcon />
								</Icon>
								<Typography>Meus endereços</Typography>
							</Grid>
							<Grid item display={'flex'}>
								<Icon>
									<HomeRoundedIcon />
								</Icon>
								<Typography>Dados e preferência</Typography>
							</Grid>
							<Grid item display={'flex'}>
								<Icon>
									<HomeRoundedIcon />
								</Icon>
								<Typography>Meus pedidos</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box
						sx={{
							width: '100%',
							background: 'blue',
							height: '70vh',
							borderRadius: '10px',
						}}
					></Box>
				</Grid>
			</Grid>
			<MyFooter />
		</React.Fragment>
	);
};

export default Profile;
