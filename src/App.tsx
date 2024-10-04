import { Route, Routes } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import FormElements from './pages/Form/FormElements';
import Settings from './pages/Settings';
import NFTCollections from './pages/UiElements/Tables/NFTCollectionManage/NFTCollections';
import UserInfo from './pages/UiElements/Tables/UseManage/UserInfo';
import NFTInfoAvailable from './pages/UiElements/Tables/UseManage/NFTInfoAvailable';
import ActiveHistory from './pages/UiElements/Tables/UseManage/ActiveHistory';
import NFTManage from './pages/UiElements/Tables/UseManage/NFTManage';
import TableAddNewNFT from './pages/UiElements/Tables/UseManage/ListTable/TableAddNewNFT';
import SignIn from './pages/Authentication/SignIn';
import AppChildren from './AppChildren';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setAuth } from './store/authSlice';
import { useEffect } from 'react';
import DetaiInforUser from './pages/UiElements/Tables/UseManage/ListTable/DetaiInforUser';
import WalletInfomations from './pages/UiElements/Tables/UseManage/ListTable/WalletInfomations';

function App() {
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      dispatch(setAuth(true));
    } else {
      dispatch(setAuth(false));
    }
  }, []);
  return (
    <AppChildren>
      <Routes>
        <Route
          index
          path="/home"
          element={
            <>
              <PageTitle title="Magage | JRE Admin" />
              <NFTCollections />
            </>
          }
        />
        <Route
          path="/userlogin_management"
          element={
            <>
              <PageTitle title="Magage | JRE Admin" />
              <NFTCollections />
            </>
          }
        />
        {/* User Management */}
        <Route
          path="/user-info"
          element={
            <>
              <PageTitle title="User Infomation | JRE Admin" />
              <UserInfo />
            </>
          }
        />
        <Route
          path="/user-info/:id"
          element={
            <>
              <PageTitle title="Detail Infomation | JRE Admin" />
              <DetaiInforUser />
            </>
          }
        />
        <Route
          path="/wallet-info"
          element={
            <>
              <PageTitle title="Wallet Infomation | JRE Admin" />
              <WalletInfomations />
            </>
          }
        />
        <Route
          path="/nft-available"
          element={
            <>
              <PageTitle title="Available NFT Infomations | JRE Admin" />
              <NFTInfoAvailable />
            </>
          }
        />
        <Route
          path="/activity-history"
          element={
            <>
              <PageTitle title="Activity History| JRE Admin" />
              <ActiveHistory />
            </>
          }
        />
        {/* NFT Collections Management  */}
        <Route
          path="/nft-collections-management"
          element={
            <>
              <PageTitle title="NFT Collections Management | JRE Admin" />
              <NFTCollections />
            </>
          }
        />
        {/* NFT Manage*/}
        <Route
          path="/nft-manage"
          element={
            <>
              <PageTitle title="NFT Management | JRE Admin" />
              <NFTManage />
            </>
          }
        />
        <Route
          path="/add-new-nft-manage"
          element={
            <>
              <PageTitle title="NFT Management | JRE Admin" />
              <TableAddNewNFT />
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
          path="/login-authentication"
          element={
            <>
              <PageTitle title="Login | JRE Admin" />
              <SignIn />
            </>
          }
        />
      </Routes>
      {/* <div className="h-screen flex items-center justify-center bg-[#e7e7e7]">
          <Routes></Routes>
        </div> */}
    </AppChildren>
  );
}

export default App;
