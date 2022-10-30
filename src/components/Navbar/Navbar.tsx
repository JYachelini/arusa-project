import { Container, Typography, Box } from '@mui/material'
import { Menu } from '@mui/icons-material'

import Logo from '../../assets/logos/arusa.svg'
function Navbar({ color = 'black' }: { color?: 'white' | 'black' }) {
	const cart = []
	return (
		<Container
			disableGutters
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: { mobile: '64px', tablet: '52px' },
				color: `${color}.main`,
				position: 'absolute',
				top: '1',
			}}
		>
			<Container
				disableGutters
				sx={{
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
					gap: '1rem',
					paddingLeft: { mobile: '1rem', tablet: '4.5rem' },
				}}
			>
				<Menu />
				<Typography variant='small' lineHeight='32px'>
					SHOP
				</Typography>
			</Container>
			<Container disableGutters>
				<img src={Logo} alt='arusa' width='117' />
			</Container>
			<Container
				disableGutters
				sx={{
					display: 'flex',
					justifyContent: 'end',
					gap: '1rem',
					paddingRight: { mobile: '1rem', tablet: '4.5rem' },
					alignItems: 'center',
				}}
			>
				<Typography variant='small' lineHeight='32px'>
					BAG
				</Typography>
				<Box
					component={'span'}
					sx={{
						backgroundColor: 'opal.main',
						borderRadius: '50px',
						width: '20px',
						height: '20px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						variant='small'
						sx={{
							lineHeight: '1px',
							color: 'white.main',
						}}
					>
						{cart.length}
					</Typography>
				</Box>
			</Container>
		</Container>
	)
}

export default Navbar
