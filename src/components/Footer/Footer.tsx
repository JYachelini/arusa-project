import { Box, Grid, Container } from '@mui/material'
import { IHeader } from './footer.interface'
import Footer_Header from './Footer_Header'
import Logo from '../../assets/logos/arusa.svg'
import Copyright from './Copyright'

function Footer() {
	const header: IHeader[] = [
		{
			id: 1,
			title: 'Store',
			content: [
				{
					id: 1,
					text: 'Home',
					href: '',
				},
				{
					id: 2,
					text: 'About',
					href: '',
				},
				{
					id: 3,
					text: 'Journal',
					href: '',
				},
				{
					id: 4,
					text: 'Contact',
					href: '',
				},
			],
		},
		{
			id: 2,
			title: 'Shop',
			content: [
				{
					id: 1,
					text: 'All',
					href: '',
				},
				{
					id: 2,
					text: 'Lookbook',
					href: '',
				},
				{
					id: 3,
					text: 'Collections',
					href: '',
				},
				{
					id: 4,
					text: 'Featured',
					href: '',
				},
			],
		},
		{
			id: 3,
			title: 'Collections',
			content: [
				{
					id: 1,
					text: 'Decors',
					href: '',
				},
				{
					id: 2,
					text: 'Furnitures',
					href: '',
				},
				{
					id: 3,
					text: 'Ceramic',
					href: '',
				},
				{
					id: 4,
					text: 'Lamps',
					href: '',
				},
			],
		},
		{
			id: 4,
			title: 'Help',
			content: [
				{
					id: 1,
					text: 'Contact',
					href: '',
				},
				{
					id: 2,
					text: 'Login & Account',
					href: '',
				},
				{
					id: 3,
					text: 'Privacy Policy',
					href: '',
				},
				{
					id: 4,
					text: 'Refund Policy',
					href: '',
				},
			],
		},
	]

	return (
		<Box
			component={'footer'}
			sx={{
				bgcolor: 'opal.main',
				color: 'cloudy.main',
				paddingTop: { mobile: '3.563rem', tablet: '0px' },
				paddingBottom: { mobile: '3.5rem', tablet: '1.375rem' },
			}}
		>
			<Grid
				container
				sx={{
					textAling: 'left',
					borderTop: '1px solid',
					borderBottom: '1px solid',
				}}
			>
				{header.map((item) => {
					return <Footer_Header item={item} key={item.id} />
				})}
			</Grid>
			<Container sx={{ marginY: { mobile: '2.188rem', tablet: '5.625rem' } }}>
				<img src={Logo} alt='arusa' />
			</Container>
			<Container
				sx={{
					paddingY: '1.5rem',
					borderTop: '1px solid',
					borderBottom: '1px solid',
				}}
			>
				<Copyright text={'© ARUSA 2022 | AGATHA SAKOWICZ | JULIAN YACHELINI'} />
			</Container>
		</Box>
	)
}

export default Footer
