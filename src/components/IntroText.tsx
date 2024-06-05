
import { Paper, ThemeProvider, Typography, createTheme } from '@mui/material'
import { introText } from '../Utils/data';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function IntroText() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Paper elevation={24} sx={{
                pt: 5,
                pr: 4,
                pl: 6,
                pb: 22,
                borderRadius: 4,
                bgcolor: 'background.default',
                display: 'grid',
                height: 100,
            }}>
                <Typography variant="h4">{introText}</Typography>
            </Paper>
        </ThemeProvider>
    )
}