import AboutPage from '../pages/AboutPage';
import {Router} from '@reach/router';
import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AuthorizedRoute from './AuthorizedRoute';
import DashboardPage from '../pages/DashboardPage';
import GenderIndexPage from '../pages/GenderIndexPage';

const Routing = (props) => {
    return (
        <Router primary>
            <HomePage path="/"/>
            <LoginPage path="/login"/>
            <AboutPage path="/about"/>
            <AuthorizedRoute path="/genders" component={<GenderIndexPage/>}/>

            <AuthorizedRoute path="/dashboard" component={<DashboardPage/>}/>
        </Router>
    );
};

export default Routing;
