import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import addToastMessage from '../../core/addToastMessage';

class HomePage extends React.PureComponent {
    render() {
        return (
            <SingleFullWidthGrid>
                <h1>Welcome</h1>
            </SingleFullWidthGrid>
        );
    }
}

export default HomePage;
