import React, { lazy, Suspense } from 'react';
import Route from './Route';
import { Switch } from 'react-router';
import Loader from '../components/Loader';

const SignIn = lazy(() => import('../pages/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Jobs = lazy(() => import('../pages/Jobs'))
const Profile = lazy(() => import('../pages/Profile'))
const Chat = lazy(() => import('../pages/Chat'))


export default function Routes () {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path='/' exact component={props => <SignIn {...props} />} />
        <Route path='/signup' exact component={props => <SignUp {...props} />} />
        <Route path='/jobs' exact component={props => <Jobs {...props} />} isPrivate />
        <Route path='/profile' exact component={props => <Profile {...props} />} isPrivate />
        <Route path='/chat' exact component={props => <Chat {...props} />} isPrivate />
      </Switch>
    </Suspense>
  );
}
