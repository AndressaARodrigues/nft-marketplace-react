import Footer from '../components/Footer/Footer';
import MainNavigation from '../components/Menu/MainNavigation';

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
      <Footer/>
    </>
  );
}

export default ErrorPage;