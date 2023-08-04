import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error';
import Marketplace from './pages/Marketplace';
import RootLayout from './pages/Root';
import Rankings from './pages/Rankings';
import CreateAccount from './pages/CreateAccount';
import ConnectWallet from './pages/ConnectWallet';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'marketplace', element: <Marketplace /> },
      { path: 'rankings', element: <Rankings /> },
      { path: 'connectWallet', element: <ConnectWallet /> },
      { path: 'createAccount', element: <CreateAccount /> }
    ],
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
