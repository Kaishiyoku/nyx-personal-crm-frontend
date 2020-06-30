import React from 'react';
import 'assets/scss/App.scss';
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
