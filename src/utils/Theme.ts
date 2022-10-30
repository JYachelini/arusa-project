import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
	interface TypographyVariantsOptions {
		large?: React.CSSProperties
		regular?: React.CSSProperties
		small?: React.CSSProperties
	}
	interface Palette {
		white: Palette['primary']
		black: Palette['primary']
		stormy: Palette['primary']
		smoke: Palette['primary']
		ash: Palette['primary']
		linen: Palette['primary']
		oyster: Palette['primary']
		cloudy: Palette['primary']
		opal: Palette['primary']
	}
	interface PaletteOptions {
		white: PaletteOptions['primary']
		black: PaletteOptions['primary']
		stormy: PaletteOptions['primary']
		smoke: PaletteOptions['primary']
		ash: PaletteOptions['primary']
		linen: PaletteOptions['primary']
		oyster: PaletteOptions['primary']
		cloudy: PaletteOptions['primary']
		opal: PaletteOptions['primary']
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		white: true
		black: true
		stormy: true
		smoke: true
		ash: true
		linen: true
		oyster: true
		cloudy: true
		opal: true
	}
	interface ButtonPropsVariantOverrides {
		primary: true
		secondary: true
		teritary: true
	}
}
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		large: true
		regular: true
		small: true
	}
}
declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false
		sm: false
		md: false
		lg: false
		xl: false
		mobile: true
		tablet: true
		laptop: true
		desktop: true
	}
}

const theme = createTheme({
	palette: {
		white: {
			main: '#FCFDFD',
		},
		black: {
			main: '#000000',
		},
		stormy: {
			main: '#323334',
		},
		smoke: {
			main: '#4E4F51',
		},
		ash: {
			main: '#7C7F84',
		},
		linen: {
			main: '#F8F4E7',
		},
		oyster: {
			main: '#DFDEDB',
		},
		cloudy: {
			main: '#F5F4F3',
		},
		opal: {
			main: '#384353',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: {},
					style: {
						borderRadius: '6px',
						textTransform: 'uppercase',
						'&:disabled': {
							opacity: '0.3',
						},
					},
				},
				{
					props: { variant: 'primary' },
					style: ({ theme: t }) => ({
						color: t.palette.stormy.main,
						backgroundColor: t.palette.linen.main,
						'&:hover': {
							color: t.palette.white.main,
							backgroundColor: t.palette.opal.main,
						},
						'&:disabled': {
							color: t.palette.stormy.main,
						},
					}),
				},
				{
					props: { variant: 'secondary' },
					style: ({ theme: t }) => ({
						color: t.palette.white.main,
						backgroundColor: t.palette.opal.main,
						'&:hover': {
							color: t.palette.stormy.main,
							backgroundColor: t.palette.oyster.main,
						},
						'&:disabled': {
							color: t.palette.white.main,
						},
					}),
				},
				{
					props: { variant: 'outlined' },
					style: ({ theme: t }) => ({
						color: t.palette.stormy.main,
						borderColor: t.palette.oyster.main,
						'&:hover': {
							color: t.palette.white.main,
							backgroundColor: t.palette.opal.main,
							borderColor: 'transparent',
						},
						'&:disabled': {
							color: t.palette.stormy.main,
						},
					}),
				},
				{
					props: { variant: 'teritary' },
					style: ({ theme: t }) => ({
						color: t.palette.stormy.main,
						borderRadius: '0',
						border: 'none',
						'&:hover': {
							backgroundColor: 'transparent',
						},
						'&:after': {
							display: 'block',
							content: '""',
							borderBottom: '1px solid',
							borderColor: t.palette.stormy.main,
							position: 'absolute',
							bottom: '0',
							width: '100%',
							transform: 'scaleX(0)',
							transition: 'transform 300ms ease-in-out',
						},
						'&:hover:after': {
							transform: 'scaleX(1)',
						},
						'&:disabled': {
							color: t.palette.stormy.main,
						},
					}),
				},
			],
		},
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,
		},
	},

	typography: {
		fontFamily: 'Reckless Neue, Neue Montreal',
		allVariants: {
			textTransform: 'none',
		},
		h1: {
			fontFamily: 'Reckless Neue',
			fontSize: '96px',
			lineHeight: '90%',
			letterSpacing: '-0.05em',
		},
		h2: {
			fontFamily: 'Reckless Neue',
			fontSize: '72px',
			lineHeight: '100%',
			letterSpacing: '-0.05em',
		},
		h3: {
			fontFamily: 'Reckless Neue',
			fontSize: '56px',
			lineHeight: '64px',
			letterSpacing: '-0.04em',
		},
		h4: {
			fontFamily: 'Reckless Neue',
			fontSize: '32px',
			lineHeight: '42px',
			letterSpacing: '-0.02em',
		},
		h5: {
			fontFamily: 'Reckless Neue',
			fontSize: '24px',
			lineHeight: '28px',
			letterSpacing: '-0.02em',
		},
		large: {
			fontFamily: 'Neue Montreal',
			fontSize: '19px',
			lineHeight: '24px',
			letterSpacing: '0.1em',
		},
		regular: {
			fontFamily: 'Neue Montreal',
			fontSize: '15px',
			lineHeight: '19px',
			letterSpacing: '0',
		},
		small: {
			fontFamily: 'Neue Montreal',
			fontSize: '12px',
			lineHeight: '14px',
			letterSpacing: '0.1em',
		},
		caption: {
			fontFamily: 'Neue Montreal',
			fontSize: '12px',
			lineHeight: '16px',
			letterSpacing: '0',
		},
	},
})

export default theme
