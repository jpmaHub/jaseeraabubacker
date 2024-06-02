import React from 'react';
import reactLogo from './react-logo.svg';
import tsLogo from './ts-logo.svg';
import jsLogo from './js-logo.svg';
import rubyLogo from './ruby-logo.svg';
import cwLogo from './code-wars.svg';
import awsLogo from './aws-logo.svg';
import terraformLogo from './te-logo.svg';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
const theme = createTheme();

theme.typography.h5 = {
  paddingBottom: '20px',
  fontFamily: 'Trebuchet MS'
};

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item-logo">
        <LinkedInIcon sx={{ fontSize: 50 }} />
        <GitHubIcon sx={{ fontSize: 50 }} />
        <img className="code-wars-logo" src={cwLogo} alt="cwlogo" />
      </div>
      <div className="grid-item-name">
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'American Typewriter' }}>Jaseera Abubacker . . /</Typography>
      </div>

      <div className="grid-item-line">
         <Divider variant="inset" sx={{ fontSize: '80px', bgcolor: 'lightseagreen'}}/>
      </div>

      <div className="grid-item-list">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Projects</Typography>
          <Typography variant="h5">Experience</Typography>
          <Typography variant="h5">About Me</Typography>
        </ThemeProvider>
      </div>
      
      <div className="grid-item-text">
        <img className="js-logo" src={jsLogo} alt="js-logo" />
        <img className="aws-logo" src={awsLogo} alt="aws-logo" />
        <img className="terraform-logo" src={terraformLogo} alt="terraform-logo" />
        <Typography variant="h5" sx={{ fontFamily: 'Trebuchet MS' }}>Hello, I am Jaseera! I'm a full stack developer who loves creating applications. Let's build something great together!</Typography>
        <img className="ruby-logo" src={rubyLogo} alt="ruby-logo" />
        <img className="react-logo" src={reactLogo} alt="react-logo" />
        <img className="ts-logo" src={tsLogo} alt="ts-logo" />
      </div>
    </div>
  );
}

export default App;
