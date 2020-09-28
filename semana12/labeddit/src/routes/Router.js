import React from 'react';
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUpPage'
import FeedPage from '../screens/FeedPage'
import PostPage from '../screens/PostPage'
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../screens/ErrorPage';

const Router = () => {
    return ( 
        <Switch>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/cadastro'}>
                <SignUpPage/>
            </Route>
            <Route exact path={['/feed', '/']}>
                <FeedPage/>
            </Route>
            <Route exact path={'/feed/:id'}>
                <PostPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
     );
}
 
export default Router;