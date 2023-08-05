import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/Menu/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;