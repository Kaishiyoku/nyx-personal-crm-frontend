import React from 'react';
import {HomeFontIcon} from '@react-md/material-icons';

const createRoute = (to, name, icon, parentId = null) => {
    return {
        children: name,
        itemId: to,
        leftIcon: icon,
        parentId,
        to,
    };
};

/* eslint-disable sort-keys */
const authorizedNavItems = {
    '/dashboard': createRoute('/dashboard', 'Dashboard', <HomeFontIcon/>),
};
/* eslint-enable sort-keys */

export default authorizedNavItems;
