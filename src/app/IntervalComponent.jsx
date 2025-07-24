import React, { useEffect, useState } from "react";

function TimerComponent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Timer Component</h1>
      <p>Value: {value}</p>
    </div>
  );
}

export default TimerComponent;
