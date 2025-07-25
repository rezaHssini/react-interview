import React, { createContext, useState } from "react";

export const MyContext = createContext();

function ContextProvider({ children }) {
  const [value, setValue] = useState(0);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
