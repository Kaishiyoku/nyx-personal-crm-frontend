import 'assets/scss/App.less';
import React from 'react';
import {Layout, Menu} from 'antd';
import isAuthorized from '../../authorization/isAuthorized';
import authorizedNavItems from '../../core/authorizedNavItems';
import unauthorizedNavItems from '../../core/unauthorizedNavItems';
import {map} from 'ramda';
import route$ from '../../rx/route$';
import MainLayout from './MainLayout';
import {createHistory, LocationProvider} from '@reach/router';
import {hot} from 'react-hot-loader';

const {SubMenu} = Menu;

class App extends React.PureComponent {
    renderNavItems = () => {
        return map((item) => {
            return <Menu.Item key={item.title} icon={item.icon} onClick={() => route$.next(item.to)}>{item.title}</Menu.Item>;
        }, isAuthorized() ? authorizedNavItems : unauthorizedNavItems);
    };

    render() {
        return (
            <LocationProvider history={createHistory(window)}>
                <Layout className="layout">
                    <Layout.Header className="layout-header">
                        <Menu mode="horizontal">
                            {this.renderNavItems()}
                        </Menu>
                    </Layout.Header>

                    <Layout.Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <MainLayout/>
                        </div>
                    </Layout.Content>

                    <Layout.Footer>

                    </Layout.Footer>
                </Layout>
            </LocationProvider>
        );
    }
}

export default hot(module)(App);
