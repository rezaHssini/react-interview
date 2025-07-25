import React, { useState } from "react";

function ComponentTwo() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Component Two</h1>
      <input type="text" onChange={handleChange} />
      <div dangerouslySetInnerHTML={{ __html: input }} />
    </div>
  );
}

export default ComponentTwo;
