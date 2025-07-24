import React, { useState } from "react";

function ServerCallComponent() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <h1>Server Call Component</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>{data}</div>}
    </div>
  );
}

export default ServerCallComponent;
