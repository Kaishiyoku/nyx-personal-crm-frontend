import React from 'react';
import {hot} from 'react-hot-loader';
import 'assets/scss/App.scss';
import AboutPage from 'components/AboutPage';
import WelcomePage from 'components/WelcomePage';
import {Link, Router} from "@reach/router"

class App extends React.PureComponent {
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/">Home</Link> | <Link to="about">About</Link>
                </nav>
                <hr/>
                <Router>
                    <WelcomePage path="/"/>
                    <AboutPage path="about"/>
                </Router>
            </div>
        );
    }
}

export default hot(module)(App);
