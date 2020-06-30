import React from 'react';
import 'assets/scss/App.scss';
import SingleFullWidthGrid from '../core/SingleFullWidthGrid';

class AboutPage extends React.PureComponent {
  render() {
    return (
      <SingleFullWidthGrid>
        <h1>About</h1>
        <p>Another page to showcase routing (react-dom-router).</p>
      </SingleFullWidthGrid>
    );
  }
}

export default AboutPage;
