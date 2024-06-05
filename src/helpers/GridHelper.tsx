import { Grid } from '@mui/material'
import './Grid.scss';
import ContactIcons from '../components/ContactIcons';
import TitleName from '../components/TitleName';
import NavBarList from '../components/NavBarList';
import { ReactNode } from 'react';

interface HomeProps {
  children: ReactNode;
}

export const GridHelper: React.FC<HomeProps> = ({ children }) => {
  return (
    <Grid container className="grid-container">
<     Grid item xs={5} className="grid-item-list">
          <NavBarList />
      </Grid>
      <Grid item xs={7} className="grid-item-name">
        <TitleName />
      </Grid>
      <Grid item xs={8} className="grid-item-intro">
        {children}
      </Grid>
      <Grid item xs={12} className="grid-item-logo">
        <ContactIcons />
      </Grid>
    </Grid>
  );
}