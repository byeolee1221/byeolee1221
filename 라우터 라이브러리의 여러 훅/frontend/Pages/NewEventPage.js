import React from "react";
import { json, redirect } from "react-router-dom";

import EventForm from "../EventForm";

const NewEventPage = () => {
    return (
        <EventForm />       
    );
}

export default NewEventPage;

export const action = async ({request, params}) => {
    const data = await request.formData();

    const enteredData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(enteredData)
    });

    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 });
    }

    return redirect('/events');
}