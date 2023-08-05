import { React } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/Storefront.png';
import classes from './Logo.module.css'

function Logo() {

  return (
    <>
      <NavLink
              to="/"
              className={classes.logo}
              >
          <img src={logoImage} alt="Logo" />
          <h2>NFT Marketplace</h2>
      </NavLink>
    </>
  );
}

export default Logo;



