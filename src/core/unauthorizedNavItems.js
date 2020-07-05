import React from 'react';
import {ExitToAppFontIcon, HelpFontIcon, HomeFontIcon} from '@react-md/material-icons';
import createRoute from './createRoute';

/* eslint-disable sort-keys */
const unauthorizedNavItems = {
    '/': createRoute('/', 'Home', <HomeFontIcon/>),
    '/login': createRoute('/login', 'Login', <ExitToAppFontIcon/>),
    '/about': createRoute('/about', 'About', <HelpFontIcon/>),
};
/* eslint-enable sort-keys */

export default unauthorizedNavItems;
