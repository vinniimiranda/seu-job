import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
import { Box, Switch } from '@material-ui/core'
import { useResponsive } from '../hooks/useResponsive'
import { useThemeUpdate, useTheme } from '../context/ThemeContext'

const DefaultLayout: React.FC = ({ children }) => {
  const responsive = useResponsive(528)
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <Box display="flex">
      {!responsive && <Nav />}
      <Box padding={responsive ? ".5rem .75rem" : "1rem 2rem"} width="100%" marginLeft={responsive ? 0 : "6rem"}>
        <Box display="flex" justifyContent="flex-end">
          <Switch checked={theme} color="primary" onChange={toggleTheme} size="medium" />
        </Box>
        {children}
      </Box>
    </Box>
  )
}
const AuthLayout: React.FC = ({ children }) => <>{children}</>

type Props = {
  component: React.FC;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ component: Component, isPrivate = false, ...rest }) => {

  const signed = false

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }
  if (signed && !isPrivate) {
    return <Redirect to="/jobs" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Route
      {...rest}
      component={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}


export default RouteWrapper