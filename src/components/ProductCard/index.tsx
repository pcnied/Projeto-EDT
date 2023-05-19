import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardProduct = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image="/static/images/cards/contemplative-reptile.jpg"
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
			<CardActions>
				<Button size="small">Comprar</Button>
				<Button size="small">Adicionar ao Carrinho</Button>
			</CardActions>
		</Card>
	);
};

export default CardProduct;
