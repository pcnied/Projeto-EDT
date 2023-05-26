import { Box, Grid, Typography } from '@mui/material';

const MyFooter = () => {
	return (
		<Grid container sx={{ margin: '0', padding: '0' }}>
			<Grid
				xs={12}
				item
				sx={{
					width: '100vh',
					height: '180px',
					background: 'black',
				}}
			>
				{/* <Box component={'img'} src={}></Box> */}
				<Box sx={{ padding: '10px' }}>
					<Typography variant="h5" color={'white'}>
						SOBRE NÓS
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default MyFooter;
