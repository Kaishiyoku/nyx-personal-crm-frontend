import React from 'react';
import {ExitToAppFontIcon, HelpFontIcon, HomeFontIcon} from '@react-md/material-icons';

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
const unauthorizedNavItems = {
    '/': createRoute('/', 'Home', <HomeFontIcon/>),
    '/login': createRoute('/login', 'Login', <ExitToAppFontIcon/>),
    '/about': createRoute('/about', 'About', <HelpFontIcon/>),
};
/* eslint-enable sort-keys */

export default unauthorizedNavItems;
