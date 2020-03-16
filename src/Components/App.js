import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import Home from './Home';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
  shadows: [0],
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container-fluid">
          <BrowserRouter>
            <Route exact path="/" component={Home} />
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
