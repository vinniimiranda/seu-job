import React, { lazy, Suspense } from 'react';
import Route from './Route';
import { Switch } from 'react-router';

const SignIn = lazy(() => import('../pages/SignIn'))


export default function Routes () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/' exact component={props => <SignIn {...props} />} />
      </Switch>
    </Suspense>
  );
}
