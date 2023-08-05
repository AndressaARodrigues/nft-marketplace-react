import classes from './SocialMedias.module.css';
import Discord from '../../assets/footer/DiscordLogo.png';
import YouTube from '../../assets/footer/YoutubeLogo.png';
import Twitter from '../../assets/footer/TwitterLogo.png';
import Intagram from '../../assets/footer/InstagramLogo.png';

function SocialMedias() {

  return (
    <>
      <div className={classes.SocialMediaIcons}>
        <img src={Discord} alt="Discord icon" />
        <img src={YouTube} alt="YouTube icon" />
        <img src={Twitter} alt="Twitter icon" />
        <img src={Intagram} alt="Instagram icon" />
      </div>
    </>
  );
}

export default SocialMedias;

