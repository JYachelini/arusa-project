import { Drawer } from '@mui/material'

function ModalNoBackdrop({
	anchor,
	idContainer,
	isOpen,
	color = false,
	children,
}: {
	anchor: 'top' | 'left' | 'right' | 'bottom'
	idContainer: string
	isOpen: boolean
	color?: boolean
	children: JSX.Element
}) {
	return (
		<Drawer
			anchor={anchor}
			hideBackdrop={true}
			PaperProps={{
				sx: {
					position: 'absolute',
					boxShadow: 'none',
					overflow: 'hidden',
					zIndex: 5,
					height: { mobile: '100%', laptop: 'fit-content' },
					width: '100%',
					paddingTop: { mobile: '64px', tablet: '52px' },
					flexDirection: 'row',
					'& .MuiContainer-root': {
						borderTop: '1px solid',
						borderColor: `${!color ? 'oyster.main' : 'transparent'}`,
					},
				},
			}}
			BackdropProps={{ sx: { position: 'fixed', zIndex: 5 } }}
			ModalProps={{
				container: document.getElementById(idContainer),
				sx: {
					position: 'fixed',
					zIndex: 5,
					top: 0,
				},
			}}
			open={isOpen}
			sx={{ zIndex: 5 }}
		>
			{children}
		</Drawer>
	)
}

export default ModalNoBackdrop
