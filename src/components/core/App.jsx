import 'assets/scss/App.scss';
import React from 'react';
import {hot} from 'react-hot-loader';
import MainLayout from './MainLayout';
import {createHistory, LocationProvider} from '@reach/router';
import {Configuration} from '@react-md/layout';
import {MessageQueue} from '@react-md/alert';

class App extends React.PureComponent {
    render() {
        return (
            <LocationProvider history={createHistory(window)}>
                <Configuration>
                    <MessageQueue id="main-alerts">
                        <MainLayout/>
                    </MessageQueue>
                </Configuration>
            </LocationProvider>
        );
    }
}

export default hot(module)(App);
