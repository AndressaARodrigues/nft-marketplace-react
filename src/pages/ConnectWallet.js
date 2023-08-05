import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import imagePlaceholder from '../assets/wallet/ImagePlaceholder.png';
import classes from './ConnectWallet.module.css';
import Forms from '../components/CreateAccount/Forms';

function ConnectWallet() {
  return (
    <>
      <Container className={classes.walletContainer}>
        <img src={imagePlaceholder} alt="Imagem fundo" className={classes.image} />
        <div className={classes.formContainer}>
          <h2>Create Account</h2>
          <p>Welcome! Enter your details and start creating, collecting, and selling NFTs.</p>
          <Forms />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ConnectWallet;
