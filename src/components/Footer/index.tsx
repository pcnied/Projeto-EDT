import { Box, Grid, Link, Typography } from '@mui/material';

const MyFooter = () => {
	return (
		<Box component={'div'}>
			<Grid
				container
				sx={{ margin: '0', background: 'black' }}
				flexDirection={'row'}
				padding={10}
				justifyContent={'space-between'}
			>
				<Grid item>
					<Typography variant="h6" color={'white'}>
						SOBRE NÓS
					</Typography>
					<Box display={'flex'} flexDirection={'column'}>
						<Link sx={{ textDecoration: 'none', color: 'white' }}>
							Termos de Uso
						</Link>
						<Link></Link>
						<Link to={''}>Termos de Uso</Link>
					</Box>
				</Grid>
				<Grid item>
					<Typography variant="h6" color={'white'}>
						AJUDA E SUPORTE
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h6" color={'white'}>
						REDES SOCIAIS
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MyFooter;
