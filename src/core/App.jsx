import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/layout-component';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
