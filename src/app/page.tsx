import HeroSection from '@/components/hero'
import NavBar from '@/components/nav-bar'
import { Box } from '@mui/material'
import "./globals.css"
import AboutUs from '@/components/about-us'
import OurClass from '@/components/our-class'
import Contact from '@/components/contact-us'

const page = () => {
  return (
    <Box className="header-hero-section-wrapper">
      <NavBar/>
      <HeroSection/>
      <AboutUs/>
      <OurClass/>
      <Contact/>
    </Box>
  )
}

export default page
