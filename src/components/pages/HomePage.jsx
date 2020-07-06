import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import withRouting from '../core/withRouting';

class HomePage extends React.PureComponent {
    render() {
        return (
            <h1>Welcome</h1>
        );
    }
}

export default withRouting(HomePage);
