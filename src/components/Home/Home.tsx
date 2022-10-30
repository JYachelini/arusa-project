import AboutUs from './AboutUs/AboutUs'
import FeatureProducts from './FeatureProducts/FeatureProducts'
import Lookbook from './Lookbook/Lookbook'
import PrincipalScreen from './PrincipalScreen/PrincipalScreen'

function Home() {
	return (
		<>
			<PrincipalScreen />
			<AboutUs />
			<FeatureProducts />
			<Lookbook />
		</>
	)
}

export default Home
