import React from 'react';  
import classes from './Footer.module.css';
import NftMarketplaceInfo from './NftMarketplaceInfo';
import Explore from './Explore';
import Subscribe from './Subscribe';

function Footer() {
  return (
    <>
    <footer>
      <div className={classes.footer}>
        <NftMarketplaceInfo/>
        <Explore/>
        <Subscribe/>
      </div>
      <div className={classes.copyright}>
        Ⓒ NFT Market. Use this template freely.
      </div>
    </footer>
    </>
  );
}

export default Footer;
