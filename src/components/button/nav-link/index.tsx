import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


interface IProps {
    title: string
}
const NavLinkButton = ({ title }: IProps) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Typography
            variant="h5"
            sx={{
                fontWeight: 500,
                fontSize: isMobile ? '1rem !important' : '1rem !important',
                color: 'var(--light-shade)',
                marginBottom: "20px",
                letterSpacing: "2px"
            }}
        >
            {title} <IconButton sx={{ color: "var(--light-shade)", borderColor: "var(--light-shade)", marginLeft: "10px", fontSize: "11px", marginBottom: "2px" }} size='small'><ArrowForwardIosIcon fontSize='inherit' /></IconButton>
        </Typography>
    )
}

export default NavLinkButton
