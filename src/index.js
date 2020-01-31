import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D97433',
    },
    text: {
      primary: '#495965',
    },
  },
  typography: {
    body1: {
      color: '#495965'
    },
    h1: {
      color: '#495965'
    },
    h2: {
      color: '#495965'
    },
    h3: {
      color: '#495965'
    },
    h4: {
      color: '#495965'
    },
    h5: {
      color: '#495965'
    },
    h6: {
      color: '#495965'
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
