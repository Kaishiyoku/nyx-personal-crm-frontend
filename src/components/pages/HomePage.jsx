import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import withRouting from '../core/withRouting';

class HomePage extends React.PureComponent {
    render() {
        return (
            <SingleFullWidthGrid>
                <h1>Welcome</h1>
            </SingleFullWidthGrid>
        );
    }
}

export default withRouting(HomePage);
