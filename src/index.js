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
      main: '#D91C5C',
    },
    text: {
      primary: '#565656',
    },
  },
  typography: {
    body1: {
      color: '#565656'
    },
    h1: {
      color: '#565656'
    },
    h2: {
      color: '#565656'
    },
    h3: {
      color: '#565656'
    },
    h4: {
      color: '#565656'
    },
    h5: {
      color: '#565656'
    },
    h6: {
      color: '#565656'
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
