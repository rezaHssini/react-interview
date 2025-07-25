import { useEffect, useState } from "react";

function useCustomHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return count;
}

export default useCustomHook;
