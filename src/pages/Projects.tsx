import './Pages.scss';
import { GridHelper } from '../helpers/GridHelper';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });


export default function Projects() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GridHelper>
     

          <Paper elevation={24} sx={{
            p: 4,
            borderRadius: 8,
            bgcolor: 'background.default',
            display: 'grid',
          }}>

            <Typography variant='h5'>What is Lorem Ipsum? </Typography>

            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>



          </Paper>


          <Paper elevation={24} sx={{
            p: 4,
            borderRadius: 8,
            bgcolor: 'background.default',
            display: 'grid',
          }}>

            <Typography variant='h5'>What is Lorem Ipsum? </Typography>

            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>



          </Paper>


    





      </GridHelper>
    </ThemeProvider>

  );
}
