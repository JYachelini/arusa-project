import { Container, Typography, Button, Grid } from '@mui/material'
import { IProduct } from '../../../interfaces/product.interface'
import Images from './importImages'
import ProductView from './ProductView'

function FeatureProducts() {
	const [Image1, Image2, Image3, Image4] = Images

	const products: IProduct[] = [
		{
			id: 1,
			title: 'Native Iron Chair',
			price: 4990,
			imageUrl: Image1,
		},
		{
			id: 2,
			title: 'Native Iron Chair',
			price: 4990,
			imageUrl: Image2,
		},
		{
			id: 3,
			title: 'Native Iron Chair',
			price: 4990,
			imageUrl: Image3,
		},
		{
			id: 4,
			title: 'Native Iron Chair',
			price: 4990,
			imageUrl: Image4,
		},
	]
	return (
		<Container disableGutters sx={{ paddingBottom: { tablet: '22px' } }}>
			<Typography
				variant='h4'
				sx={{
					color: 'stormy.main',
					borderTop: '1px solid',
					borderBottom: '1px solid',
					paddingY: '24px',
					borderColor: 'oyster.main',
				}}
			>
				Enjoy our feature products
			</Typography>
			<Grid container sx={{ borderBottom: '1px solid', borderColor: 'oyster.main' }}>
				{products.map((product) => {
					return <ProductView key={product.id} product={product} />
				})}
			</Grid>
			<Button
				variant='teritary'
				sx={{
					paddingY: '24px',
					color: 'stormy.main',
					width: '100%',
					borderBottom: '1px solid',
					borderColor: 'oyster.main',
				}}
			>
				<Typography variant='small'>Shop all</Typography>
			</Button>
		</Container>
	)
}

export default FeatureProducts
