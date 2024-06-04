import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material'
import './Pages.scss';
import IntroText from '../components/IntroText';
import SkillsLogos from '../components/SkillsLogos';
import { GridHelper } from '../helpers/GridHelper';

export default function Home() {
  return (
    <GridHelper>
        <Grid item xs={11}>
          <IntroText />
        </Grid>
      <Grid item xs={10}>
        <Divider sx={{ fontSize: '80px', bgcolor: 'lightseagreen' }} />
      </Grid>
      <Grid item className="grid-item-skills-logo">
        <SkillsLogos />
      </Grid>
    </GridHelper>
  );
}