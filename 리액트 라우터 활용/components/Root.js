import React, { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
}

export default Root;