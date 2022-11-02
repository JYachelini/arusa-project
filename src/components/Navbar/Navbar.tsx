import { AppBar, Box, Toolbar } from '@mui/material'
import { useState } from 'react'

import Left from './Left'
import Center from './Center'
import Right from './Right'
import Image3 from '../../assets/images/Home/FeatureProducts/Image3.png'
import Image2 from '../../assets/images/Home/FeatureProducts/Image2.png'
import { ICart } from '../../interfaces/cart.interface'
function Navbar({ color = false }: { color?: boolean }) {
	const [colorText, setColorText] = useState(color)
	const cart: ICart = {
		id: 1,
		totalPrice: 4990 * 2,
		totalItems: 2,
		products: [
			{
				id: 1,
				title: 'Native Light Chair',
				sizeY: 100,
				sizeX: 100,
				price: 4990,
				imageUrl: Image3,
				quantity: 1,
			},
			{
				id: 2,
				title: 'Native Light Chair',
				sizeY: 50,
				sizeX: 100,
				price: 4990,
				imageUrl: Image2,
				quantity: 1,
			},
		],
	}

	const [isOpenLeft, setIsOpenLeft] = useState(false)
	const [isOpenRight, setIsOpenRight] = useState(false)

	const toggleDrawer =
		(state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}
			setColorText(!colorText)

			setState(!state)
		}
	return (
		<AppBar
			sx={{
				position: 'absolute',
				backgroundColor: 'transparent',
				boxShadow: 'none',
				zIndex: 10,
			}}
		>
			<Toolbar
				sx={{
					position: 'relative',
					height: { mobile: '64px', tablet: '52px' },
					width: '100%',
					padding: '0',
				}}
				id='AppBar'
			>
				<Box
					sx={{
						transition: 'all 300ms ease-in-out',
						zIndex: 10,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
						'&>button:nth-of-type(-n+2)': {
							width: 'fit-content',
						},
						'&>div:nth-of-type(1)': {
							width: 'fit-content',
						},
					}}
				>
					<Left
						color={colorText}
						toggleDrawer={() => toggleDrawer(isOpenLeft, setIsOpenLeft)}
						isOpen={isOpenLeft}
					/>
					<Center color={colorText} />
					<Right
						color={colorText}
						cart={cart}
						isOpen={isOpenRight}
						toggleDrawer={() => toggleDrawer(isOpenRight, setIsOpenRight)}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
