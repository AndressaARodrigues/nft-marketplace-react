import classes from './Explore.module.css'

function Explore() {

  return (
    <>
        <div className={classes.explore}>
          <h2>Explore</h2>
          <ul className={classes.list}>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/rankings">Rankings</a></li>
            <li><a href="/connectWallet">Connect Wallet</a></li>
          </ul>
        </div>
    </>
  );
}

export default Explore;