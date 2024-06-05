import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme();

export default function NavBarList() {
    return (
        <Box
            sx={{
                paddingTop: '10%',
                bgcolor: 'lightseagreen',
                height: '60px',
                paddingLeft: '2%',
                color: 'white',
                borderColor: 'white',
            }}
        >

            <ButtonGroup aria-label="Basic button group" variant="text">
                <Button><Link to="/" className="link">
                    <Typography variant="h6">Home</Typography>
                </Link></Button>
                <Button><Link to="/my-projects" className="link">
                    <Typography variant="h6">Projects</Typography>
                </Link></Button>
                <Button><Link to="/my-experience" className="link">
                    <Typography variant="h6">Experience</Typography>
                </Link></Button>
                <Button><Link to="/references" className="link">
                    <Typography variant="h6">References</Typography>
                </Link></Button>
            </ButtonGroup>
        </Box>

    )
}