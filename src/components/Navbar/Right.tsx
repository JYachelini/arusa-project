import { Close } from '@mui/icons-material'
import { Badge, IconButton, Tooltip, Typography } from '@mui/material'
import Modal from '../../common/Modal'
import { ICart } from '../../interfaces/cart.interface'
import Bag from './Bag'

function Right({
	color,
	isOpen,
	toggleDrawer,
	cart,
}: {
	color: boolean
	isOpen: boolean
	toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void
	cart: ICart
}) {
	return (
		<>
			<Tooltip title='Click to see bag'>
				<IconButton
					sx={{
						display: 'flex',
						justifyContent: 'end',
						gap: '1rem',
						margin: 0,
						marginRight: { mobile: '1rem', tablet: '4.5rem' },
						alignItems: 'center',
						cursor: 'pointer',
						color: `${!color ? 'black' : 'white'}.main`,
					}}
					onClick={toggleDrawer()}
				>
					<Typography variant='small' lineHeight='32px'>
						BAG
					</Typography>
					<Badge
						badgeContent={cart.totalItems}
						showZero={true}
						color='opal'
						sx={{ color: 'white.main', typography: 'small', lineHeight: '1px' }}
					></Badge>
				</IconButton>
			</Tooltip>
			<Modal
				anchor='right'
				isOpen={isOpen}
				children={<Bag cart={cart} toggleDrawer={toggleDrawer} />}
				toggleDrawer={toggleDrawer}
			/>
		</>
	)
}

export default Right
