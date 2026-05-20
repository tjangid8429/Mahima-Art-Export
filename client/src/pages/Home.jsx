import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import HeroSection from "../components/HeroSection"
import FeaturedProducts from "../components/FeaturedProducts"
import AboutCompany from "../components/AboutCompany"
import Gallery from "../components/Gallery"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
            <Navbar />
            <HeroSection/>
            <FeaturedProducts/>
            <Categories />
            <AboutCompany/>
            <Gallery/>
            <WhyChooseUs/>
            <Testimonials/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

export default Home