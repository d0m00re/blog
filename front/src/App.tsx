import React from 'react';
import './App.css';

import Routes from './components/Routes/Routes'

import HeaderBar from './components/Layout/HeaderBar'
import GeneralLayout from './components/Layout/GeneralLayout';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from './theme/index';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderBar />
        <GeneralLayout>
            <Routes />
        </GeneralLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
