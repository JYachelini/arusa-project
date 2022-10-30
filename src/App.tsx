import { Container } from '@mui/material'
import './App.css'
import './assets/fonts/RecklessNeue/stylesheet.css'
import './assets/fonts/NeueMontreal/stylesheet.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
function App() {
	return (
		<Container disableGutters className='App' sx={{ position: 'relative' }}>
			<Navbar color='white' />
			<Home />
			<Footer />
		</Container>
	)
}

export default App
