import React, { Fragment } from "react";
import { useLoaderData, json } from "react-router-dom";
import EventsList from "../EventsList";

// const DUMMY = [
//     { id: 'e1', title: 'event1'},
//     { id: 'e2', title: 'event2'}
// ];

const EventsPage = () => {
    const data = useLoaderData();
    const events = data.events;

    if(data.isError) {
      return <p>{data.message}</p>
    }

    return (
      <Fragment>
        <EventsList events={events} />
      </Fragment>
    );
}


export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

          if (!response.ok) {
            // return { isError: true, message: 'Could not fetch events.' };
            // throw new Response(JSON.stringify({ message: 'could not fetch evnets.' }), { status: 500 });
            return json({ message: 'could not fetch events.' }, { status: 500 });
          } else {
            return response;
          } 
        }