import classes from './Subscribe.module.css';
import Button from '../../UI/Button';

function Subscribe() {

  return (
    <>
      <div className={classes.subscribe}>
        <h2>Join our weekly digest</h2>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <form className={classes.subscribeForm}>
          <input type="email" placeholder="Enter your email here" />
          <Button className={classes.subscribeButton} type="submit">Subscribe</Button>
        </form>
    </div>
    </>
  );
}

export default Subscribe;
