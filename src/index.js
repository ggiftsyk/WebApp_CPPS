import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LandingPage from './pages/landingPage/LandingPage';
import PaymentPage from './pages/paymentPage/PaymentPage';
import PayingPage from './pages/payingPage/PayingPage';
import ReceiptPage from './pages/receiptPage/ReceiptPage';
import LoginPage from './LoginPage';
import DetailPage from './DetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DetailPage />
  </React.StrictMode>
);


reportWebVitals();
