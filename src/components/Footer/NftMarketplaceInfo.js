import Logo from '../../UI/Logo'
import SocialMedias from '../SocialMedias/SocialMedias';
import classes from './NftMarketplaceInfo.module.css'

function NftMarketplaceInfo() {
  return (
    <>
      <div className={classes.marketplaceInfo}>
        <Logo/>
        <p>NFT marketplace UI created with Anima for Figma.</p>
        <p>Join our community</p>
        <SocialMedias/>
      </div>
    </>
  );
}

export default NftMarketplaceInfo;

