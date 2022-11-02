import { Box, Button, Container, Typography } from '@mui/material'
import { ICart } from '../../interfaces/cart.interface'
import ItemsBag from './ItemsBag'
import { toPrice } from '../../common/toPrice'

function Bag({
	cart,
	toggleDrawer,
}: {
	cart: ICart
	toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void
}) {
	return (
		<>
			<Container
				disableGutters
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '100%',
					justifyContent: 'space-between',
					margin: 0,
					paddingX: { mobile: '3rem', laptop: '5rem' },
					paddingBottom: { mobile: '64px', laptop: '52px' },
				}}
			>
				<Box sx={{}}>
					<Typography
						sx={{
							typography: 'large',
							textTransform: 'uppercase',
							color: 'stormy.main',
							paddingTop: { mobile: '2rem', laptop: '1.5rem' },
							textAlign: 'center',
						}}
					>
						Order Summary
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						paddingTop: { mobile: '1rem', laptop: '1.5rem' },
						gap: { mobile: '1rem', laptop: '2rem' },
						marginLeft: { mobile: '1rem', laptop: '0' },
						maxHeight: { mobile: '70%', laptop: '80%' },
					}}
				>
					{cart.products.length > 0 ? (
						cart.products.map((product) => {
							return (
								<Box
									key={product.id}
									sx={{
										display: 'flex',
										flexDirection: 'column',
										gap: '.5rem',
										width: '100%',
										maxHeight: '20%',
									}}
								>
									<ItemsBag product={product} />
								</Box>
							)
						})
					) : (
						<></>
					)}
				</Box>
				{cart.products.length > 0 && (
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingY: '.5rem',
								borderTop: '1px solid',
								borderBottom: '1px solid',
								borderColor: 'oyster.main',
							}}
						>
							<Typography
								sx={{
									typography: 'small',
									color: 'stormy.main',
									textTransform: 'uppercase',
								}}
							>
								Grand total incl. tax
							</Typography>
							<Typography>${toPrice(cart.totalPrice)}</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: { mobile: 'column', laptop: 'row' },
								justifyContent: 'center',
								gap: '.5rem',
							}}
						>
							<Button
								variant='outlined'
								sx={{ width: '100%', typography: 'small', padding: '1rem' }}
								onClick={toggleDrawer()}
							>
								Continue shopping
							</Button>
							<Button variant='secondary' sx={{ width: '100%', typography: 'small', padding: '1rem' }}>
								Proceed to checkout
							</Button>
						</Box>
					</Box>
				)}
			</Container>
		</>
	)
}

export default Bag
