import { Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme();

theme.typography.h5 = {
    paddingBottom: '20px',
    fontFamily: 'Trebuchet MS'
};
export default function NavBarList() {
    return (
        <ThemeProvider theme={theme}>
            <Link to="/" className="link">
                <Typography variant="h5">Home</Typography>
            </Link>

            <Link to="/about-me" className="link">
                <Typography variant="h5">About Me</Typography>
            </Link>

            <Typography variant="h5">Projects</Typography>
            <Typography variant="h5">Experience</Typography>
        </ThemeProvider>
    )
}