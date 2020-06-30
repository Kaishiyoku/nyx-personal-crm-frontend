import AboutPage from '../pages/AboutPage';
import {Router} from '@reach/router';
import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const Routing = (props) => {
    return (
        <Router>
            <HomePage path="/"/>
            <LoginPage path="/login"/>
            <AboutPage path="about"/>
        </Router>
    );
};

export default Routing;
