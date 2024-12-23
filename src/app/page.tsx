import HeroSection from '@/components/hero'
import NavBar from '@/components/nav-bar'
import { Box } from '@mui/material'
import "./globals.css"

const page = () => {
  return (
    <Box className="header-hero-section-wrapper">
      <NavBar/>
      <HeroSection/>
    </Box>
  )
}

export default page
