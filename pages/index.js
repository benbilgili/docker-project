import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getFootballData'); // Update the endpoint accordingly
      const newData = await response.json();
      setData(newData);
      console.log("NEW DATA: ", newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        <h1>HELLO ARSENAL</h1>
        {data && (
          <div>
            <h2>{data.name}</h2>
            {/* Render other properties as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
