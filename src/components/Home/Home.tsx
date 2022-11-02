import AboutUs from './AboutUs/AboutUs'
import Articles from './Articles/Articles'
import ContactUs from './ContactUs/ContactUs'
import Details from './Details/Details'
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
			<Details />
			<Articles />
			<ContactUs />
		</>
	)
}

export default Home
