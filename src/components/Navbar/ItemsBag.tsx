import CloseIcon from '@mui/icons-material/Close'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { toPrice } from '../../common/toPrice'
import { IProduct } from '../../interfaces/product.interface'

function ItemsBag({ product }: { product: IProduct }) {
	return (
		<Box sx={{ display: 'flex', height: '100%', gap: '2rem' }}>
			<Box
				component='img'
				src={product.imageUrl}
				sx={{ borderRadius: '1rem', border: '1px solid', borderColor: 'oyster.main' }}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography sx={{ typography: { mobile: 'regular', laptop: 'h5' } }}>
						{product.title}
					</Typography>
					<Button variant='outlined' sx={{ minWidth: 'auto', padding: '1px', borderRadius: '100%' }}>
						<CloseIcon fontSize='small' />
					</Button>
				</Box>
				<Box>
					<Typography sx={{ typography: 'regular', textTransform: 'uppercase', color: 'smoke.main' }}>
						Size: {`${product.sizeY} x ${product.sizeX}`}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ typography: 'regular', textTransform: 'uppercase', color: 'smoke.main' }}>
						${toPrice(product.price!)}
					</Typography>
					<ButtonGroup size='small'>
						<Button
							sx={{
								borderRight: 'none',
								'&:hover': {
									borderRight: 'none',
								},
							}}
						>
							<RemoveOutlinedIcon />
						</Button>
						<Button
							disableRipple
							sx={{
								borderLeft: 'none',
								borderRight: 'none',
								'&:hover': {
									backgroundColor: 'transparent',
									color: 'inherit',
									borderColor: 'oyster.main',
									borderLeft: 'none',
									borderRight: 'none',
								},
							}}
						>
							{product.quantity}
						</Button>
						<Button
							sx={{
								borderLeft: 'none',
								'&:hover': {
									borderLeft: 'none',
								},
							}}
						>
							<AddOutlinedIcon />
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
		</Box>
	)
}

export default ItemsBag
