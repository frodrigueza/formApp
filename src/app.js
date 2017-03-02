import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';
// require('bootstrap/dist/css/bootstrap.css')
// import 'bootstrap/dist/css/bootstrap.css';
import './app.css'
// require('font-awesome/css/font-awesome.css')
// import 'jquery';
// import 'bootstrap-loader';

ReactDOM.render(
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>,
  document.getElementById('app')
);
