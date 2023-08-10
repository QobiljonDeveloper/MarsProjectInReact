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
     
    </div>
  );
};

export default MarsBotContent;
