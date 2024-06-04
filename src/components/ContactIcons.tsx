import CodeWarsLogo from '../assets/code-wars.svg';
import GitHubLogo from '../assets/github.svg';
import LinkedInLogo from '../assets/linkedin.svg';
import EmailLogo from '../assets/email.svg';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';

export default function ContactIcons() {
    return (
        <>
            <Link href="https://github.com/jpmaHub">
                <img className="github-logo" src={GitHubLogo} alt="GitHubLogo" />
            </Link>
            <Link href="https://www.linkedin.com/in/mjaseera">
                <img className="linkedin-logo" src={LinkedInLogo} alt="LinkedInLogo" />
            </Link>
            <Link href="mailto:someone@email.com">
                <img className="email-logo" src={EmailLogo} alt="EmailLogo" />
            </Link>
            <Link href="https://www.codewars.com/users/jpmaHub">
                <img className="code-wars-logo" src={CodeWarsLogo} alt="CodeWarsLogo" />
            </Link>
        </>
    )
}