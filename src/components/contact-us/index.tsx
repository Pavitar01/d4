import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './styles.css';

const Contact = () => {
    return (
        <Box className="contact-container">
            <Box className="contact-info">
                <Typography variant="h5" className="contact-title" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1" className="contact-item">
                    <IconButton color="inherit">
                        <LocalPhoneIcon />
                    </IconButton>
                    +123 456 7890
                </Typography>
                <Typography variant="body1" className="contact-item">
                    <IconButton color="inherit">
                        <EmailIcon />
                    </IconButton>
                    contact@example.com
                </Typography>
                <Typography variant="body1" className="contact-item">
                    <IconButton color="inherit">
                        <LocationOnIcon />
                    </IconButton>
                    123 Street, City, Country
                </Typography>
            </Box>
            <Box className="contact-form">
                <Typography variant="h4" className="form-title" gutterBottom>
                    CONTACT US
                </Typography>
                <TextField
                    placeholder="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        className: 'styled-input',
                    }}
                />
                <TextField
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        className: 'styled-input',
                    }}
                />
                <TextField
                    placeholder="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    InputProps={{
                        className: 'styled-input',
                    }}
                />
                <Button variant="contained" color="primary" className="submit-button" fullWidth>
                    SUBMIT
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;
