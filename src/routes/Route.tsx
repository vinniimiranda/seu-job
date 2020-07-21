import React from 'react'

import { Route, Redirect } from 'react-router-dom'

const DefaultLayout: React.FC = ({ children }) => (
  <div>
    {children}
  </div>
)
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
    return <Redirect to="/signin" />
  }
  if (signed && !isPrivate) {
    return <Redirect to="/" />
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