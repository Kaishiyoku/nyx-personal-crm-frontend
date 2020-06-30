import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import {Other, Visible} from 'somereactcomponents';
import isAuthorized from '../../authorization/isAuthorized';
import LoginPage from './LoginPage';

class HomePage extends React.PureComponent {
    render() {
        return (
            <Visible when={isAuthorized()}>
                <SingleFullWidthGrid>
                    <h1>Welcome</h1>
                </SingleFullWidthGrid>

                <Other/>

                <LoginPage/>
            </Visible>
        );
    }
}

export default HomePage;
