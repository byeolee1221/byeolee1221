import React, { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../EventsList";

// const DUMMY = [
//     { id: 'e1', title: 'event1'},
//     { id: 'e2', title: 'event2'}
// ];

const EventsPage = () => {
    const events = useLoaderData();

    return (
      <Fragment>
        <EventsList events={events} />
      </Fragment>
    );
}

export default EventsPage;