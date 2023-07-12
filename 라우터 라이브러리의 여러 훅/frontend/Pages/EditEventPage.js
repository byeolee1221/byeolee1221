import React, { Fragment } from "react";
import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../EventForm";

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <Fragment>
            <h1>This is EditEvent Page!</h1>
            <EventForm event={event} />
        </Fragment>
    );
}

export default EditEventPage;