import { React } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

function HomePage() {
  /*const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }*/

  return (
    <>
      <h1>Home Page</h1>
      <Footer/>
    </>
  );
}

export default HomePage;