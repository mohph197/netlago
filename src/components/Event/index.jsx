import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetails from "./EventDetails";
import Navigation from "../Navigation";

const Event = () => {
    const [event, setEvent] = useState(null);
    let { eventId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/event/${eventId}`)
        .then(res => res.json()).then(data => setEvent(data));
    })

    return (
        <div>
            {event && <Navigation section={<EventDetails event={event}/>}/>}
        </div>
    );
}
 
export default Event;