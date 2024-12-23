'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';

const Navbar = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0} >
            <Toolbar sx={{ padding: "16px" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 500,
                        letterSpacing: "4px",
                        flexGrow: 1,
                        marginLeft: isMobile ? "5px" : "50px",
                        marginTop: "20px",
                        display: 'block',
                    }}
                >
                    D4NCE
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: isMobile ? 'none' : 'flex',
                        justifyContent: 'flex-end',
                        marginRight: "50px",
                        marginTop: "20px",
                    }}
                >
                    {['About', 'Our Class', 'Testimonial', 'Contact', 'Register'].map((item) => (
                        <Button
                            key={item}
                            sx={{ color: 'var(--light-shade)', textTransform: 'none', mx: 0.5,letterSpacing:"1.5px" }}
                        >
                            {item.toUpperCase()}
                        </Button>
                    ))}
                </Box>

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: !isMobile ? 'none' : 'block' }}
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ display: !isMobile ? 'none' : 'block' }} // Show only on small screens
                >
                    {['About', 'Contact', 'Register'].map((item) => (
                        <MenuItem key={item} onClick={handleMenuClose}>
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
