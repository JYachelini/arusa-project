import {
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
	Link,
	Button,
} from '@mui/material'
import { IHeader } from './footer.interface'

function Footer_Header({ item }: { item: IHeader }) {
	return (
		<Grid
			item
			mobile={6}
			tablet={3}
			sx={{
				'&:nth-of-type(odd)': {
					borderRight: '1px solid',
				},
				'&:nth-last-of-type(-n+2)': {
					borderTop: { mobile: '1px solid', tablet: 'none' },
				},
				'&:nth-of-type(2)': {
					borderRight: { tablet: '1px solid' },
				},
			}}
		>
			<List sx={{ textAlign: 'left' }}>
				<ListItem sx={{ paddingBottom: '0' }}>
					<ListItemText>
						<Typography
							variant='small'
							sx={{
								textTransform: 'uppercase',
							}}
						>
							{item.title}
						</Typography>
					</ListItemText>
				</ListItem>
				{item.content.map((item) => {
					return (
						<Link
							variant='small'
							href={item.href}
							underline='hover'
							sx={{
								color: 'cloudy.main',
							}}
							key={item.id}
						>
							<ListItem key={item.id}>
								<ListItemText primary={item.text} disableTypography={true} />
							</ListItem>
						</Link>
					)
				})}
			</List>
		</Grid>
	)
}

export default Footer_Header
