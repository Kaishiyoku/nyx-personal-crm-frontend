import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import withRouting from '../core/withRouting';

class DashboardPage extends React.PureComponent {
    render() {
        return (
            <h1>Dashboard</h1>
        );
    }
}

export default withRouting(DashboardPage);
