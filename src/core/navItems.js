import React from 'react';
import {HelpFontIcon, HomeFontIcon} from '@react-md/material-icons';

const createRoute = (to, name, icon, parentId = null) => {
    return {
        children: name,
        itemId: to,
        leftIcon: icon,
        parentId,
        to,
    };
};

/* eslint sort-keys: 0 */
const navItems = {
    '/': createRoute('/', 'Home', <HomeFontIcon/>),
    '/about': createRoute('/about', 'About', <HelpFontIcon/>),
};
/* eslint sort-keys: ["error", "asc"] */

export default navItems;
