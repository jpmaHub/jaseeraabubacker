import './Pages.scss';
import { GridHelper } from '../helpers/GridHelper';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 550,
    height: 150,
    marginLeft: '30%',
    ...theme.typography.body1,
    textAlign: 'center',
  }));

  
export default function References() {
  return (
    <GridHelper>
      <Grid item xs={8}>
           <DemoPaper square> </DemoPaper>
        </Grid>
    </GridHelper>
  );
}
