'use client';
import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { PurpleDancer } from '@/assets';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './styles.css';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} className="grid-container">
          <Image
            className="big-purple-image"
            src={PurpleDancer}
            alt="Dance with style"
          />
        </Grid>

        <Grid item xs={12} sm={5} className='text-container'>
          <Typography
            variant="h5"
            component="p"
            className='text-container-phrase'
            sx={{
              fontWeight: 500,
              fontSize: isMobile ? '1rem !important' : '1rem !important',
              color: 'var(--light-shade)',
              marginBottom: "30px",
            }}
          >
            Enjoy Each Step Along The Way
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? '2rem !important' : '3rem !important',
              color: 'var(--light-shade)',
              letterSpacing: "1px",
            }}
          >
            Learn To Dance
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? '2rem' : '3rem',
              color: 'var(--light-shade)',
              marginBottom: "30px",
              letterSpacing: "1px",
            }}
          >
            With Style
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              fontSize: isMobile ? '1rem !important' : '0.8rem !important',
              color: 'var(--light-shade)',
              marginBottom: "20px",
              letterSpacing: "2px"
            }}
          >
            LEARN MORE <IconButton sx={{ color: "var(--light-shade)", borderColor: "var(--light-shade)", marginLeft: "10px", fontSize: "11px", marginBottom: "2px" }} size='small'><ArrowForwardIosIcon fontSize='inherit' /></IconButton>
          </Typography>
          <Box className="follow-actions">
            <Typography variant="body2" sx={{ color: 'var(--light-shade)', letterSpacing: "2px" }}>FOLLOW US <Typography component="span" sx={{ marginBottom: "70px", marginLeft: "10px" }}> &#11834;</Typography></Typography>
            <IconButton sx={{ color: "var(--light-shade)", borderColor: "var(--light-shade)", marginLeft: "20px", fontSize: "16px" }} size='small'><InstagramIcon fontSize='inherit' /></IconButton>
            <IconButton sx={{ color: "var(--light-shade)", borderColor: "var(--light-shade)", marginLeft: "10px", fontSize: "16px" }} size='small'><FacebookIcon fontSize='inherit' /></IconButton>
            <IconButton sx={{ color: "var(--light-shade)", borderColor: "var(--light-shade)", marginLeft: "10px", fontSize: "16px" }} size='small'><YouTubeIcon fontSize='inherit' /></IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
