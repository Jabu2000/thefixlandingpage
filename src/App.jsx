import ReactLenis from "@studio-freight/react-lenis"
import FashionPage from "./section/FashionPage"
import FeaturePage from "./section/FeaturePage"
import ParallaxImages from "./section/ParallaxaImage"
import ShopingPage from "./section/ShopingPage"
import Navbar from "./section/Navbar"
import HeroLanding from "./section/HeroLanding"
import FooterPage from "./section/FooterPage"

const App = () => {  return (
   
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <HeroLanding />
        <Navbar />
        <ParallaxImages />
        <ShopingPage />
        <FashionPage />
        <FeaturePage />
        <FooterPage />
      </ReactLenis>
  )
}

export default App
