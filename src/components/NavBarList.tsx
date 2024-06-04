import { Divider, Typography } from '@mui/material'
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme();

theme.typography.h5 = {
    paddingBottom: '10px',
    paddingTop: '10px',
    paddingLeft: '20%',
    fontSize: '25px',
};

const commonStyles = {
    paddingBottom: '1.5px',
    background: 'lightseagreen'
};

export default function NavBarList() {
    return (
        <ThemeProvider theme={theme}>
            <Link to="/" className="link">
                <Typography variant="h5">Home</Typography>
            </Link>
            <Divider sx={{ ...commonStyles }} />
            <Link to="/my-projects" className="link">
                <Typography variant="h5">Projects</Typography>
            </Link>
            <Divider sx={{ ...commonStyles }} />
            <Link to="/my-experience" className="link">
                <Typography variant="h5">Experience</Typography>
            </Link>
            <Divider sx={{ ...commonStyles }} />
            <Link to="/references" className="link">
                <Typography variant="h5">References</Typography>
            </Link>
        </ThemeProvider>
    )
}