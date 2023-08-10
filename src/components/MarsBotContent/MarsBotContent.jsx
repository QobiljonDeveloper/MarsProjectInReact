import React, { useState, useEffect } from 'react';

const MarsBotContent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the data
    fetch('http://localhost:3000/MarsBot')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.eventName}</h2>
          <p>Location: {event.location}</p>
          <p>Date: {event.currentdate}</p>
          <p>Time: {event.currenttime}</p>
          <p>Next Date: {event.nextdate}</p>
          <p>Next Time: {event.nexttime}</p>
        </div>
      ))}
    </div>
  );
};

export default MarsBotContent;
