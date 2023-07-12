import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import EventsNavigation from "../EventsNavigation";

const EventRoot = () => {
    return (
        <Fragment>
            <EventsNavigation />
            <Outlet />
        </Fragment>
    );
}

export default EventRoot;