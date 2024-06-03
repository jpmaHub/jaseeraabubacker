import CodeWarsLogo from '../assets/code-wars.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactIcons() {
    return (
        <>
            <LinkedInIcon sx={{ fontSize: 50 }} />
            <GitHubIcon sx={{ fontSize: 50 }} />
            <img className="code-wars-logo" src={CodeWarsLogo} alt="CodeWarsLogo" />
        </>
    )
}