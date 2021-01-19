import { MuiThemeProvider } from "@material-ui/core/styles";
//@ts-ignore
import * as Theme from "./constants/theme";
import React from 'react';
import ReactDOM from 'react-dom';
import RTLProvider from "./components/RTLProvider";

import "./styles/global.css";

import App from './App';
import reportWebVitals from './reportWebVitals';


const Main = () => (
  <MuiThemeProvider theme={Theme.theme}>
          <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
