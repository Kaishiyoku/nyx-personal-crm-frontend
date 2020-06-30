import AboutPage from '../pages/AboutPage';
import {Router} from '@reach/router';
import React from 'react';
import HomePage from '../pages/HomePage';

const Routing = (props) => {
    return (
        <Router>
            <HomePage path="/"/>
            <AboutPage path="about"/>
        </Router>
    );
};

export default Routing;
