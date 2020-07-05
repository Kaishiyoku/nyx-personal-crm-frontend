import React from 'react';
import {HomeFontIcon} from '@react-md/material-icons';
import createRoute from './createRoute';

/* eslint-disable sort-keys */
const authorizedNavItems = {
    '/dashboard': createRoute('/dashboard', 'Dashboard', <HomeFontIcon/>),
    '/genders': createRoute('/genders', 'Genders'),
};
/* eslint-enable sort-keys */

export default authorizedNavItems;
