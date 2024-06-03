import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material'
import './Pages.scss';
import ContactIcons from '../components/ContactIcons';
import TitleName from '../components/TitleName';
import NavBarList from '../components/NavBarList';
import IntroText from '../components/IntroText';
import SkillsLogos from '../components/SkillsLogos';

export default function Home() {
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
              <IntroText />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ fontSize: '80px', bgcolor: 'lightseagreen' }} />
            </Grid>
            <Grid item xs={12} className="grid-item-skills-logo">
              <SkillsLogos />
            </Grid>
          </Grid>
        </Grid>
      );
}