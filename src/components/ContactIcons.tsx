import CodeWarsLogo from '../assets/code-wars.svg';
import GitHubLogo from '../assets/github.svg';
import LinkedInLogo from '../assets/linkedin.svg';

export default function ContactIcons() {
    return (
        <>
            <a href="https://github.com/jpmaHub">
                <img className="github-logo" src={GitHubLogo} alt="GitHubLogo" />
            </a>
            <a href="https://www.linkedin.com/in/mjaseera">
                <img className="linkedin-logo" src={LinkedInLogo} alt="LinkedInLogo" />
            </a>
            <a href="https://www.codewars.com/users/jpmaHub">
                <img className="code-wars-logo" src={CodeWarsLogo} alt="CodeWarsLogo" />
            </a>

        </>
    )
}