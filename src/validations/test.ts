import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
// import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'flatpickr/dist/flatpickr.min.css';
import { ConfigProvider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SignIn from './pages/Authentication/SignIn';
import App from './App';

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accesToken');
  const expriation = localStorage.getItem('expiation');
  const currrentTime = Date.now();
  if (accessToken && expriation) {
    return currrentTime < parseInt(expriation, 10);
  }
  return false;
};

const MainApp: React.FC = () => {
  const isAuthenticated = checkAccessToken();

  return (
    <Router>
      <div className="mt-20 pl-39">
        <Routes>
          <Route path="/" element={isAuthenticated ? <App /> : <SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(60 80 224)',
          borderRadius: 4,
        },
      }}
      spin={{
        indicator: <Spin indicator={antIcon} />,
      }}
    >
      <MainApp />
    </ConfigProvider>
  </React.StrictMode>,
);
