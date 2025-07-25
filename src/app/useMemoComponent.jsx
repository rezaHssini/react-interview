import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Result: {expensiveCalculation}</p>
    </div>
  );
}

export default UseMemoComponent;
