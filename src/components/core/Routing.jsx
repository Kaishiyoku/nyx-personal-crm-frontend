import AboutPage from '../pages/AboutPage';
import {Router} from '@reach/router';
import React from 'react';
import LoginPage from '../pages/LoginPage';

const Routing = (props) => {
    return (
        <Router>
            <LoginPage path="/"/>
            <AboutPage path="about"/>
        </Router>
    );
};

export default Routing;
