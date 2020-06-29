import React, {ReactElement, useRef} from "react";
import {Layout, useLayoutNavigation} from "@react-md/layout";
import {ENTER, useCrossFade} from "@react-md/transition";
import navItems from "./navItems";
import App from "./App";
import {Link, Router, useLocation} from '@reach/router';
import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';
import {Grid} from '@react-md/utils';

export default () => {
    const {pathname} = useLocation();
    const [_rendered, transitionProps, dispatch] = useCrossFade();
    const prevPathname = useRef(pathname);

    if (pathname !== prevPathname.current) {
        prevPathname.current = pathname;
        dispatch(ENTER);
    }

    return (
        <Layout
            title="My Title"
            navHeaderTitle="My Nav Title"
            treeProps={useLayoutNavigation(navItems, pathname, Link)}
            mainProps={transitionProps}
        >
            <Router>
                <WelcomePage path="/"/>
                <AboutPage path="about"/>
            </Router>
        </Layout>
    );
};
