
import ReactLogo from '../assets/react-logo.svg';
import TypeScriptLogo from '../assets/ts-logo.svg';
import JavaScriptLogo from '../assets/js-logo.svg';
import RubyLogo from '../assets/ruby-logo.svg';
import AWSLogo from '../assets/aws-logo.svg';
import TerraformLogo from '../assets/te-logo.svg';

export default function SkillsLogos() {
  return (
    <>
      <img className="js-logo" src={JavaScriptLogo} alt="js-logo" />
      <img className="aws-logo" src={AWSLogo} alt="aws-logo" />
      <img className="terraform-logo" src={TerraformLogo} alt="terraform-logo" />
      <img className="ruby-logo" src={RubyLogo} alt="ruby-logo" />
      <img className="react-logo" src={ReactLogo} alt="react-logo" />
      <img className="ts-logo" src={TypeScriptLogo} alt="ts-logo" />
    </>
  )
}