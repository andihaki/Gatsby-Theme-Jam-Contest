import React from "react";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isOneDay = start.toDateString() === end.toDateString();
  console.log(isOneDay);
  return (
    <React.Fragment>
      <time dateTime={start.toISOString()}>
        {getDate(start, {
          year: isOneDay || start.getFullYear() !== end.getFullYear()
        })}
      </time>
      {!isOneDay && (
        <React.Fragment>
          -
          <time dateTime={end.toISOString()}>
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const Event = ({ name, location, startDate, endDate, url }) => (
  <div>
    <h1>
      {name} ({location})
    </h1>
    <p>
      {startDate} - {endDate}
    </p>
    <p>
      <EventDate startDate={startDate} endDate={endDate} />
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
);

export default Event;
