import React from 'react';
import {render} from 'react-dom';
import MainLayout from './components/MainLayout';
import {createHistory, LocationProvider, Router} from '@reach/router';
import {Configuration} from '@react-md/layout';

const rootEl = document.getElementById('root');

const MainApp = () => {
    return (
        <LocationProvider history={createHistory(window)}>
            <Configuration>
                <MainLayout/>
            </Configuration>
        </LocationProvider>
    );
};

render(<MainApp/>, rootEl);
