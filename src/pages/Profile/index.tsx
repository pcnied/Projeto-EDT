import {
	ContactPageOutlined,
	HomeRounded,
	LocationOnOutlined,
} from '@mui/icons-material';
import { Box, Grid, Icon, Typography } from '@mui/material';
import React from 'react';

import UserSvg from '../../../public/assets/user.svg';
import MyFooter from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Profile = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />
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
									<HomeRounded />
								</Icon>
								<Typography>Home</Typography>
							</Grid>
							<Grid item display={'flex'}>
								<Icon>
									<LocationOnOutlined />
								</Icon>
								<Typography>Meus endereços</Typography>
							</Grid>
							<Grid item display={'flex'}>
								<Icon>
									<ContactPageOutlined />
								</Icon>
								<Typography>Dados e preferências</Typography>
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
