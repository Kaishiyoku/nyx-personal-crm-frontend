import 'assets/scss/App.scss';
import React from 'react';
import {hot} from 'react-hot-loader';
import MainLayout from './MainLayout';
import {createHistory, LocationProvider, navigate} from '@reach/router';
import {Configuration} from '@react-md/layout';
import {MessageQueue} from '@react-md/alert';
import clearApiToken from '../../authorization/clearApiToken';
import {DropdownMenu} from '@react-md/menu';
import {MoreVertSVGIcon} from '@react-md/material-icons';
import route$ from '../../rx/route$';
import isAuthorized from '../../authorization/isAuthorized';

class App extends React.PureComponent {
    render() {
        const handleLogout = () => {
            clearApiToken();

            route$.next('/');
        };

        const handleLogin = () => {
            route$.next('/login');
        };

        const appBarMoreMenuItems = isAuthorized() ? [{children: 'Logout', onClick: handleLogout}] : [{children: 'Login', onClick: handleLogin}];

        const appBarNavItems = [
            <DropdownMenu
                first
                key="menu"
                id="dropdown-menu"
                items={appBarMoreMenuItems}
                buttonType="icon"
                aria-label="Menu"
            >
                <MoreVertSVGIcon />
            </DropdownMenu>,
        ];

        return (
            <LocationProvider history={createHistory(window)}>
                <Configuration>
                    <MessageQueue id="main-alerts">
                        <MainLayout appBarNavItems={appBarNavItems}/>
                    </MessageQueue>
                </Configuration>
            </LocationProvider>
        );
    }
}

export default hot(module)(App);
