import React, {useRef} from 'react';
import {Layout, useLayoutNavigation} from '@react-md/layout';
import {ENTER, useCrossFade} from '@react-md/transition';
import navItems from '../../core/navItems';
import {Link, useLocation} from '@reach/router';
import config from '../../config';
import Routing from './Routing';

export default () => {
    const {pathname} = useLocation();
    const [_rendered, transitionProps, dispatch] = useCrossFade();
    const prevPathname = useRef(pathname);

    if (pathname !== prevPathname.current) {
        // eslint-disable-next-line fp/no-mutation
        prevPathname.current = pathname;
        dispatch(ENTER);
    }

    return (
        <Layout
            title={config.appTitle}
            navHeaderTitle={config.navTitle}
            treeProps={useLayoutNavigation(navItems, pathname, Link)}
            mainProps={transitionProps}
        >
            <Routing/>
        </Layout>
    );
};
