import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ChaveiroSoja from '../../../public/assets/Chaveiro Soja 3 Grãos.jpg';

const CardProductCart = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActions>
				<IconButton>
					<DeleteOutlineOutlinedIcon />
				</IconButton>
			</CardActions>
			<CardMedia
				sx={{ height: 140 }}
				image={ChaveiroSoja}
				title="green iguana"
			/>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Chaveiro - R$ 20,00
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Chaveiro Experientes da Terra
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardProductCart;
