import React from "react";
import UnclearComponent from "./UnclearComponent";
import TimerComponent from "./TimerComponent";
import MultiTasker from "./MultiTasker";
import ServerCallComponent from "./ServerCallComponent";
import ContextProvider from "./ContextProvider";
import { MyContext } from "./ContextProvider";
import useStore from "./zustandStore";

function MainComponent() {
  const { value, setValue } = React.useContext(MyContext);
  const { count, increment } = useStore();

  return (
    <ContextProvider>
      <div>
        <h1>Main Component</h1>
        <UnclearComponent />
        <TimerComponent />
        <MultiTasker />
        <ServerCallComponent />
        <button onClick={increment}>Increment Count: {count}</button>
        <button onClick={() => setValue(value + 1)}>
          Increment Context Value: {value}
        </button>
      </div>
    </ContextProvider>
  );
}

export default MainComponent;
