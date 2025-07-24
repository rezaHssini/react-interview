import React from "react";

function UnclearComponent() {
  const key = "12345-ABCDE";

  const execute = () => {
    console.log("Executing with key:", key);
  };

  return (
    <div>
      <h1>Unclear Component</h1>
      <button onClick={execute}>Execute</button>
    </div>
  );
}

export default UnclearComponent;
