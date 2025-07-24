import React, { useState } from "react";

function ComponentOne() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <h1>Component One</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComponentOne;
