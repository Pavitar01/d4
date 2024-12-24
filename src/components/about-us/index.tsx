'use client';
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { YellowDancer } from '@/assets';
import Image from 'next/image';
import NavLinkButton from '../button/nav-link';
import "./styles.css"

const AboutUs: React.FC = () => {
    return (
        <Box className="about-us-section">
            <Grid container spacing={2} className='about-container'>
                <Grid item xs={12} md={5} className='about-text-container'>
                    <Typography variant="h4"  className='about-us-heading' gutterBottom>
                        EVERYTHING ABOUT US
                    </Typography>
                    <Typography variant="body1" className='about-us-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <NavLinkButton title="READ MORE" />
                </Grid>

                <Grid item xs={12} md={7}>
                    <Image
                        src={YellowDancer}
                        alt="About Us"
                        className="about-us-image"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUs;
