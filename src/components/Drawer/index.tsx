import { CloseOutlined } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';

import CardProductCart from '../CardProductCart';

type AnchorCart = {
	right: boolean;
};

interface DrawerCartProps {
	anchorCart: AnchorCart;
	setAnchorCart: React.Dispatch<
		React.SetStateAction<{
			right: boolean;
		}>
	>;
}

const DrawerCart: React.FC<DrawerCartProps> = ({
	anchorCart,
	setAnchorCart,
}) => {
	return (
		<div>
			<React.Fragment key={'right'}>
				<Drawer anchor={'right'} open={anchorCart['right']}>
					<Grid
						container
						flexDirection={'column'}
						alignItems={'flex-end'}
						justifyContent={'flex-end'}
						padding={2}
						spacing={2}
					>
						<Grid item>
							<IconButton
								onClick={() => setAnchorCart({ right: false })}
							>
								<CloseOutlined />
							</IconButton>
						</Grid>
						<Grid
							item
							display={'flex'}
							justifyContent={'center'}
							sx={{ width: '100%' }}
						>
							<Typography variant={'h6'} component={'h3'}>
								Carrinho de compras
							</Typography>
						</Grid>
						<Grid item>
							<CardProductCart />
						</Grid>
						<Grid item>
							<CardProductCart />
						</Grid>
						<Grid item>
							<CardProductCart />
						</Grid>
						<Grid item>
							<CardProductCart />
						</Grid>
					</Grid>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default DrawerCart;
