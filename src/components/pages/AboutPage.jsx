import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import trans from '../../i18n/trans';

class AboutPage extends React.PureComponent {
    render() {
        return (
            <SingleFullWidthGrid>
                <h1>{trans('about.title')}</h1>
            </SingleFullWidthGrid>
        );
    }
}

export default AboutPage;
