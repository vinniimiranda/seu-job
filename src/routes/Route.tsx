import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
import { Box } from '@material-ui/core'

const DefaultLayout: React.FC = ({ children }) => (
  <Box display="flex">
    <Nav />
    <Box padding="1rem 2rem">
      {children}
    </Box>
  </Box>
)
const AuthLayout: React.FC = ({ children }) => <>{children}</>

type Props = {
  component: React.FC;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ component: Component, isPrivate = false, ...rest }) => {

  const signed = true

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