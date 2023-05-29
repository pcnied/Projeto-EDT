import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ChaveiroAbridor from '../../../public/assets/Chaveiro Abridor resinado 1.jpg';

const CardProduct = () => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
				borderRadius: '8px',
			}}
		>
			<CardMedia sx={{ height: '250px' }} image={ChaveiroAbridor} />
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					Chaveiro - R$ 20,00
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Chaveiro Experientes da Terra
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="contained">
					Comprar
				</Button>
				<Button size="small" variant="contained">
					Adicionar ao Carrinho
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardProduct;
