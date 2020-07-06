import React from 'react';
import {HomeOutlined, LoginOutlined, QuestionOutlined} from '@ant-design/icons';

/* eslint-disable sort-keys */
const unauthorizedNavItems = [
    {to: '/', title: 'Home', icon: <HomeOutlined/>},
    {to: '/login', title: 'Login', icon: <LoginOutlined/>},
    {to: '/about', title: 'About', icon: <QuestionOutlined/>},
];
/* eslint-enable sort-keys */

export default unauthorizedNavItems;
