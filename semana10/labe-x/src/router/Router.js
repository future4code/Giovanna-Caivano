import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage';
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import AdminListTripsPage from '../screens/AdminListTripsPage/AdminListTripsPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage'
import UserListTripsPage from '../screens/UserListTripsPage/UserListTripsPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/inscrever/:id">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/viagens/admin">
                    <AdminListTripsPage/>
                </Route>
                <Route exact path="/viagens/user">
                    <UserListTripsPage/>
                </Route>
                <Route exact path="/adcviagem">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/detalhes/:id">
                    <TripDetailsPage/>
                </Route>
                <Route>
                    <div>
                        <p>Hmmmm... não achei essa página :(</p>
                        <img src={"https://http.cat/404"} alt={"gatinho escondido"}/>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;