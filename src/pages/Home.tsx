import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material'
import './Pages.scss';
import ContactIcons from '../components/ContactIcons';
import TitleName from '../components/TitleName';
import NavBarList from '../components/NavBarList';
import IntroText from '../components/IntroText';
import SkillsLogos from '../components/SkillsLogos';
import { GridHelper } from '../helpers/GridHelper';

export default function Home() {
  return (
    <GridHelper>
      <Grid item xs={12}>
        <IntroText />
      </Grid><Grid item xs={12}>
        <Divider sx={{ fontSize: '80px', bgcolor: 'lightseagreen' }} />
      </Grid><Grid item xs={12} className="grid-item-skills-logo">
        <SkillsLogos />
      </Grid>
    </GridHelper>
  );
}