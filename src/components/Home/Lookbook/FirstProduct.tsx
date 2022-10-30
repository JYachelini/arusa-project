import { Container, Typography, Button, Box } from '@mui/material'

import Image from '../../../assets/images/Home/LookBook/FirstProduct.png'
function FirstProduct() {
	const product = {
		id: 1,
		title: 'Native light chair',
		description:
			'Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.',
		imageUrl: Image,
	}
	return (
		<Container
			disableGutters
			sx={{
				display: 'flex',
				flexDirection: { mobile: 'column', tablet: 'row-reverse' },
				gap: { mobile: '56px', tablet: '0' },
				padding: { mobile: '16px', tablet: '0' },
			}}
		>
			<Box sx={{ width: { tablet: '50%' } }}>
				<img
					src={product.imageUrl}
					alt={product.title}
					style={{ width: '100%', height: '100%' }}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: '48px',
					textAlign: 'left',
					width: { tablet: '50%' },
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography variant='h4' color='white.main'>
					{product.title}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						gap: '24px',
						flexDirection: { mobile: 'column' },
					}}
				>
					<Typography sx={{ typography: 'regular', color: 'oyster.main' }}>
						{product.description}
					</Typography>
					<Typography>
						<Button
							variant='teritary'
							sx={{
								typography: 'small',
								color: 'white.main',
								paddingX: '0',
								'&:after': { borderColor: 'white.main' },
							}}
						>
							View product
						</Button>
					</Typography>
				</Box>
			</Box>
		</Container>
	)
}

export default FirstProduct
