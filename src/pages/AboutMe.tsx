import { Grid } from '@mui/material'
import './Pages.scss';
import ContactIcons from '../components/ContactIcons';
import TitleName from '../components/TitleName';
import NavBarList from '../components/NavBarList';

export default function AboutMe() {
    return (
        <Grid container className="grid-container">
          <Grid item xs={4} className="grid-item-logo">
            <ContactIcons />
          </Grid>
    
          <Grid item xs={8} className="grid-item-name">
            <TitleName />
          </Grid>
    
          <Grid item xs={4} className="grid-item-list">
            <NavBarList />
          </Grid>
    
          <Grid item xs={8} className="grid-item-intro">
            <Grid item xs={12}>
             
            </Grid>
          </Grid>
        </Grid>
      );
}