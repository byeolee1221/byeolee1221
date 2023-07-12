import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "./MainNavigation";

const Root = () => {
    const navigation = useNavigation();
    
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </Fragment>
    );
}

export default Root;