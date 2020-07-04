import React, {useRef} from 'react';
import {Layout, useLayoutNavigation} from '@react-md/layout';
import {ENTER, useCrossFade} from '@react-md/transition';
import navItems from '../../core/navItems';
import {Link, useLocation} from '@reach/router';
import config from '../../config';
import Routing from './Routing';
import ErrorDialog from './ErrorDialog';
import {useAddMessage} from '@react-md/alert';
import useObservable from './useObservable';
import toast$ from '../../rx/toast$';

export default () => {
    const addMessage = useAddMessage();
    const {pathname} = useLocation();
    const [_rendered, transitionProps, dispatch] = useCrossFade();
    const prevPathname = useRef(pathname);

    useObservable(toast$, null, addMessage);

    if (pathname !== prevPathname.current) {
        // eslint-disable-next-line fp/no-mutation
        prevPathname.current = pathname;
        dispatch(ENTER);
    }

    return (
        <>
            <ErrorDialog/>

            <Layout
                title={config.appTitle}
                navHeaderTitle={config.navTitle}
                treeProps={useLayoutNavigation(navItems, pathname, Link)}
                mainProps={transitionProps}
            >
                <Routing/>
            </Layout>
        </>
    );
};
