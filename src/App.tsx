import ReactLogo from './logo/react-logo.svg';
import TypeScriptLogo from './logo/ts-logo.svg';
import JavaScriptLogo from './logo/js-logo.svg';
import RubyLogo from './logo/ruby-logo.svg';
import CodeWarsLogo from './logo/code-wars.svg';
import AWSLogo from './logo/aws-logo.svg';
import TerraformLogo from './logo/te-logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.scss';

const theme = createTheme();

theme.typography.h5 = {
  paddingBottom: '20px',
  fontFamily: 'Trebuchet MS'
};

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item grid-item-logo">
        <LinkedInIcon sx={{ fontSize: 50 }} />
        <GitHubIcon sx={{ fontSize: 50 }} />
        <img className="code-wars-logo" src={CodeWarsLogo} alt="CodeWarsLogo" />
      </div>
      
      <div className="grid-item grid-item-name">
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'American Typewriter' }}>Jaseera Abubacker . . /</Typography>
      </div>

      <div className="grid-item grid-item-list">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Projects</Typography>
          <Typography variant="h5">Experience</Typography>
          <Typography variant="h5">About Me</Typography>
        </ThemeProvider>
      </div>

      <div className="grid-item grid-item-intro">
        <div className="grid-item grid-item-text">
          <Typography className="about-me" variant="h5" sx={{ fontFamily: 'Trebuchet MS' }}>Hello, I am Jaseera! I'm a full stack developer who loves creating applications. Let's build something great together!</Typography>
        </div>
        <div className="grid-item-line">
         <Divider sx={{ fontSize: '80px', bgcolor: 'lightseagreen'}}/>
      </div>
        <div className="grid-item grid-item-skills-logo">
          <img className="js-logo" src={JavaScriptLogo} alt="js-logo" />
          <img className="aws-logo" src={AWSLogo} alt="aws-logo" />
          <img className="terraform-logo" src={TerraformLogo} alt="terraform-logo" />
          <img className="ruby-logo" src={RubyLogo} alt="ruby-logo" />
          <img className="react-logo" src={ReactLogo} alt="react-logo" />
          <img className="ts-logo" src={TypeScriptLogo} alt="ts-logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
