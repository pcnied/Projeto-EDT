import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface HomeTitleProps {
	title: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ title }) => {
	return (
		<Grid container alignItems={'center'} paddingX={'10px'}>
			<Grid item xs={4}>
				<Box
					component={'div'}
					sx={{
						height: '1px',
						border: ' 1px solid black',
						width: '100%',
					}}
				/>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h3" textAlign={'center'}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Box
					component={'div'}
					sx={{
						height: '1px',
						border: ' 1px solid black',
						width: '100%',
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default HomeTitle;
