import React from 'react';
import { Router } from 'react-router'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css'
import Routes from './routes/index'
import history from './services/history'

const ThemeContext: React.FC = () => {
  const prefersDarkMode = false;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#EE7633" : "#00BFA6",
            contrastText: "#fff",

          },
          // secondary: {
          //   main: prefersDarkMode ? "#00DDAA" : "#EE7633",
          // },
          // background: {
          //   default: prefersDarkMode ? "#000014" : "#FAFAFA",
          //   paper: prefersDarkMode ? "#111128" : "#EEE",
          // },
          text: {
            primary: prefersDarkMode ? "#FFF" : "#666",
            secondary: prefersDarkMode ? "#FFF" : "#999",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeContext />
  );
}

export default App;
