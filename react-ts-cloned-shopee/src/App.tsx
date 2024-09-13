import React from 'react';
import MainRoute from './routes/MainRoute';
import { BrowserRouter } from 'react-router-dom';
import Header from './share/layout/header/Header';
import Footer from './share/layout/footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'antd';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className="App-body">
          <MainRoute/>
        </div>
        <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
