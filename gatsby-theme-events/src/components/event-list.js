import React from "react";
import { Link } from "gatsby";

const EventList = ({ events }) => (
  <React.Fragment>
    <h1>Upcoming events</h1>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString("id-ID", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}{" "}
          in {event.location}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default EventList;
