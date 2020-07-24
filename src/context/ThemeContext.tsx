import React, { createContext, useState, useContext } from 'react'
import { createMuiTheme, ThemeProvider as ThemeMUIProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Router } from 'react-router';
import Routes from '../routes/index'
import history from '../services/history'

const ThemeContext = createContext(false)
const ThemeUpdateContext = createContext(() => { })

const ThemeProvider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme () {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkTheme ? "dark" : "light",
          primary: {
            main: darkTheme ? "#EE7633" : "#00BFA6",
            contrastText: "#fff",

          },
          // secondary: {
          //   main: darkTheme ? "#00DDAA" : "#EE7633",
          // },
          // background: {
          //   default: darkTheme ? "#000014" : "#FAFAFA",
          //   paper: darkTheme ? "#111128" : "#EEE",
          // },
          text: {
            primary: darkTheme ? "#FFF" : "#666",
            secondary: darkTheme ? "#FFF" : "#999",
          },
        },
      }),
    [darkTheme]
  );

  return <ThemeContext.Provider value={darkTheme}>
    <ThemeUpdateContext.Provider value={toggleTheme}>
      <ThemeMUIProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeMUIProvider>
      {children}
    </ThemeUpdateContext.Provider>
  </ThemeContext.Provider>
}

export function useTheme () {
  return useContext(ThemeContext)
}

export function useThemeUpdate () {
  return useContext(ThemeUpdateContext)
}

export default ThemeProvider