import { Container, Box, useMediaQuery, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Images from './importImages'
import FirstProduct from './FirstProduct'
import ProductView from '../FeatureProducts/ProductView'
import { IProduct } from '../../../interfaces/product.interface'
import Presentation from './Presentation'
import FeatureProducts from './FeatureProducts'

function Lookbook() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('laptop'))
	const [
		LookBook2,
		LookBook2Mobile,
		LookBook2_Product1,
		LookBook2_Product2,
		LookBook2_Product3,
		FeatureProduct1,
		FeatureProduct2,
		FeatureProduct3,
		FeatureProduct4,
		FeatureProduct5,
		FeatureProduct6,
		FeatureProduct7,
		FeatureProduct8,
	] = Images
	const products: IProduct[] = [
		{
			id: 1,
			title: 'Iglenix Vase',
			imageUrl: LookBook2_Product1,
			price: 2299,
		},
		{
			id: 2,
			title: 'Atajux Lamp',
			imageUrl: LookBook2_Product2,
			price: 2399,
		},
	]

	const lookBookPresentation = {
		title: 'Lookbook',
		description:
			'The pieces stand out for their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environments.',
	}

	const productPresentation: IProduct = {
		id: 1,
		materials: ['Ceramic', 'Glass', 'Iron', 'Wood'],
		producedIn: ['Canada', 'Italy', 'United States'],
		categories: ['Decoration', 'Lamp', 'Furniture'],
		imageUrl: LookBook2_Product3,
	}

	const featureProducts: IProduct[] = [
		{
			id: 1,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct1,
		},
		{
			id: 2,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct2,
		},
		{
			id: 3,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct3,
		},
		{
			id: 4,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct4,
		},
		{
			id: 5,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct5,
		},
		{
			id: 6,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct6,
		},
		{
			id: 7,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct7,
		},
		{
			id: 8,
			title: 'Naitve iron chair',
			price: 4990,
			imageUrl: FeatureProduct8,
		},
	]
	return (
		<Container disableGutters sx={{ backgroundColor: 'opal.main' }}>
			<FirstProduct />
			<Box
				sx={{
					minHeight: '100vh',
					position: 'relative',
				}}
			>
				<Box component='img' src={matches ? LookBook2 : LookBook2Mobile} sx={{ width: '100%' }} />
				{products.map((product) => {
					return (
						<Paper
							key={product.id}
							sx={{
								width: { laptop: '14rem', desktop: '19rem' },
								backgroundColor: 'white.main',
								position: 'absolute',
								padding: '1rem',
								top: `${product.id === 1 ? '0' : 'auto'}`,
								bottom: `${product.id === 2 ? '5rem' : 'auto'}`,
								right: `${product.id === 2 ? '0' : 'auto'}`,
								marginY: '15rem',
								marginX: '12rem',
								display: { mobile: 'none', laptop: 'block' },
							}}
						>
							<ProductView product={product} />
						</Paper>
					)
				})}
			</Box>
			<Presentation
				title={lookBookPresentation.title}
				description={lookBookPresentation.description}
				product={productPresentation}
			/>
			<FeatureProducts products={featureProducts} />
		</Container>
	)
}

export default Lookbook
