import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [teamId, setTeamId] = useState(57); // Initial teamId

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getFootballData/${teamId}`);
      const newData = await response.json();
      setData(newData);
      console.log("NEW DATA: ", newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [teamId]); // Run the effect whenever teamId changes

  const handleTeamIdChange = (newTeamId) => {
    setTeamId(newTeamId);
  };

  return (
    <div>
      <div>
        <label>
          Select Team:
          <select value={teamId} onChange={(e) => handleTeamIdChange(e.target.value)}>

            <option key={57} value={57} label={"Arsenal"}></option>
            <option key={58} value={58} label={"Aston Villa"}></option>
            <option key={61} value={61} label={"Chelsea"}></option>
            <option key={62} value={62} label={"Everton"}></option>
            <option key={63} value={63} label={"Fulham"}></option>
            <option key={64} value={64} label={"Liverpool"}></option>
            <option key={65} value={65} label={"Manchester City"}></option>
            <option key={66} value={66} label={"Manchested United"}></option>
            <option key={67} value={67} label={"Newcastle United"}></option>
            <option key={73} value={73} label={"Tottenham Hotspur"}></option>
            <option key={76} value={76} label={"Wolverhampton Wanderers"}></option>          

          </select>
        </label>





          <div>

      {data && (
        <div>
          <h2>{data.name}</h2>
          <h3>Players</h3>
          {data.squad.map((player) => (
            <div
              key={player.id}
              style={{
                padding: "0.5rem",
                border: "1px solid black",
                borderRadius: "15px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <span style={{ display: "block", width: "100%" }}>
                {player.name}
              </span>
              <span style={{ display: "block", width: "100%" }}>
                {player.position}
              </span>
            </div>
          ))}
          {/* Render other properties as needed */}
        </div>
      )}
    </div>


      </div>
    </div>
  );
}

export default Home;
