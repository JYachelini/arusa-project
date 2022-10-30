import { Grid, Typography, Box } from '@mui/material'

import { IProduct } from '../../../interfaces/product.interface'

function ProductView({ product }: { product: IProduct }) {
	return (
		<Grid
			item
			sx={{
				color: 'oyster.main',
				textTransform: 'uppercase',
				display: { mobile: 'flex', tablet: 'block' },
				flexDirection: { mobile: 'column', tablet: 'row' },
				textAlign: 'left',
				padding: '8px',
				gap: '8px',
				'&:nth-of-type(odd)': {
					borderRight: { mobile: '1px solid', tablet: 'none' },
				},
				'&:nth-last-of-type(-n+2)': {
					borderTop: { mobile: '1px solid', tablet: 'none' },
				},
			}}
			mobile={6}
			tablet={3}
		>
			<img src={product.imageUrl} alt={product.title} style={{ width: '100%' }} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '24px',
					flexDirection: { mobile: 'column', tablet: 'row' },
				}}
			>
				<Typography variant='small' color='stormy.main'>
					{product.title}
				</Typography>
				<Typography variant='small' color='stormy.main'>
					${product.price}
				</Typography>
			</Box>
		</Grid>
	)
}

export default ProductView
