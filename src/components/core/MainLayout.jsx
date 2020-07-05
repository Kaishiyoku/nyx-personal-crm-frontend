import React, {useRef} from 'react';
import {Layout, useLayoutNavigation} from '@react-md/layout';
import {ENTER, useCrossFade} from '@react-md/transition';
import {Link, useLocation} from '@reach/router';
import config from '../../config';
import Routing from './Routing';
import ErrorDialog from './ErrorDialog';
import {useAddMessage} from '@react-md/alert';
import useObservable from './useObservable';
import toast$ from '../../rx/toast$';
import isAuthorized from '../../authorization/isAuthorized';
import authorizedNavItems from '../../core/authorizedNavItems';
import unauthorizedNavItems from '../../core/unauthorizedNavItems';

export default (props) => {
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

    const navItems = isAuthorized() ? authorizedNavItems : unauthorizedNavItems;

    return (
        <>
            <ErrorDialog/>

            <Layout
                title={config.appTitle}
                navHeaderTitle={config.navTitle}
                treeProps={useLayoutNavigation(navItems, pathname, Link)}
                mainProps={transitionProps}
                appBarProps={{children: props.appBarNavItems}}
            >
                <Routing/>
            </Layout>
        </>
    );
};
