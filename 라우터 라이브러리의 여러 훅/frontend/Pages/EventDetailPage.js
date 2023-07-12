import React, { Fragment } from "react";

import EventItem from "../EventItem";
import { useParams, json, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();
    const data = useRouteLoaderData('event-detail');

    return (
        <Fragment>
            <EventItem event={data.event} />
        </Fragment>
    );
}

export default EventDetailPage;

export const loader = async ({request, params}) => {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.'}, { status: 500 });
    } else {
        return response;
    }
}