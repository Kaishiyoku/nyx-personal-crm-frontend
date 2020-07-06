import React from 'react';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';
import trans from '../../i18n/trans';
import withRouting from '../core/withRouting';

class AboutPage extends React.PureComponent {
    render() {
        return (
            <h1>{trans('about.title')}</h1>
        );
    }
}

export default withRouting(AboutPage);
