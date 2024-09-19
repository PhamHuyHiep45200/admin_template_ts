import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'flatpickr/dist/flatpickr.min.css';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      token: {
        colorPrimary: "rgb(60 80 224)",
        borderRadius: 4
      }
    }}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
