import './Pages.scss';
import { GridHelper } from '../helpers/GridHelper';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Experience() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GridHelper>
       <Grid item xs={10}>
           <Paper elevation={24} sx={{
                p: 22,
                borderRadius: 8,
                bgcolor: 'background.default',
                display: 'grid',
                height: 250,
              }}>  
              
               <Typography variant='h5'>What is Lorem Ipsum? </Typography>
            
              <Typography>Lorem Ipsum is sum has been the industry's standard dummy textsum.</Typography>
              
              
              
               </Paper>
        </Grid>
      </GridHelper>
    </ThemeProvider>

  );
}
