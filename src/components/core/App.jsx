import 'assets/scss/App.scss';
import React from 'react';
import {hot} from 'react-hot-loader';
import MainLayout from './MainLayout';
import {createHistory, LocationProvider} from '@reach/router';
import {Configuration} from '@react-md/layout';

class App extends React.PureComponent {
    render() {
        return (
            <LocationProvider history={createHistory(window)}>
                <Configuration>
                    <MainLayout/>
                </Configuration>
            </LocationProvider>
        );
    }
}

export default hot(module)(App);
