import React from 'react';
import 'assets/scss/App.scss';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';

class WelcomePage extends React.PureComponent {
    render() {
        return (
            <SingleFullWidthGrid>
                <h1>Hello World!</h1>
                <p>Foo to the bar</p>
            </SingleFullWidthGrid>
        );
    }
}

export default WelcomePage;
