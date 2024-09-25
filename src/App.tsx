import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Demo from './pages/Demo';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          path="/login-authentication"
          element={
            <>
              <PageTitle title="Magage | JRE Admin" />
              <Demo />
            </>
          }
        />
        <Route
          path="/userlogin_management"
          element={
            <>
              <PageTitle title="Magage | JRE Admin" />
              <ECommerce />
            </>
          }
        />
        {/* User Management */}
        <Route
          path="/user-info"
          element={
            <>
              <PageTitle title="User Management | JRE Admin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/wallet-info"
          element={
            <>
              <PageTitle title="User Management | JRE Admin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/nft-available"
          element={
            <>
              <PageTitle title="User Management | JRE Admin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/activity-history"
          element={
            <>
              <PageTitle title="User Management | JRE Admin" />
              <Profile />
            </>
          }
        />
        {/* NFT Collections Management  */}
        <Route
          path="/nft-collections-management"
          element={
            <>
              <PageTitle title="NFT Collections Management | JRE Admin" />
              <Profile />
            </>
          }
        />
        <Route
          path="/nft-manage"
          element={
            <>
              <PageTitle title="NFT Management | JRE Admin" />
              <FormElements />
            </>
          }
        />
        {/* Applications Management */}
        <Route
          path="/operator-notice"
          element={
            <>
              <PageTitle title="NFT Management | JRE Admin" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/campain-notice"
          element={
            <>
              <PageTitle title="NFT Management | JRE Admin" />
              <FormElements />
            </>
          }
        />

        {/* Notice*/}

        <Route
          path="/notifications"
          element={
            <>
              <PageTitle title="Notifications | JRE Admin" />
              <Settings />
            </>
          }
        />
        <Route
          path="/notifications"
          element={
            <>
              <PageTitle title="Notifications | JRE Admin" />
              <Settings />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
