import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import classes from './MainNavigation.module.css';
import logoImage from '../assets/Storefront.png';
import user from '../assets/User.png';
import Button from '../UI/Button'; 
import NavMenu from '../assets/nav menu.png';


function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.header}>
      <NavLink
              to="/"
              className={classes.logo}
              >
          <img src={logoImage} alt="Logo" />
          NFT Marketplace
      </NavLink>
      <button className={classes.menuButton} onClick={toggleMenu}>
        <img src={NavMenu} alt="Menu icone" />
      </button>
      <nav className={`${classes.list} ${isMenuOpen ? classes.open : ''}`}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/marketplace"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
             Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rankings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Rankings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connectWallet"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Connect Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createAccount"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
               <Button
                className={classes.createAccountButton} 
              >
                <img src={user} alt="User" />
                Sign Up
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
