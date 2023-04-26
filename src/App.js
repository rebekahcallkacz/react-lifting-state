import { React, useState, useEffect } from "react";

import ClickerCircleIcon from "./ClickerCircleIcon";
import ClickerIcon from "./ClickerIcon";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import FilterDemo from "./FilterDemo";

// I create custom hooks when I want to be able to reuse them for multiple components
// It isn't necessary here, but I'm including it for the sake of the demo
const useCustomState = () => {
  const [clickCount, setClickCount] = useState(0);

  // This will only run when the variable clickCount changes
  useEffect(() => {
    console.log("the click count changed!");
    console.log(clickCount);
  }, [clickCount]);

  return [clickCount, setClickCount];
};

function App() {
  const [clickCount, setClickCount] = useCustomState();

  return (
    <div>
      <Counter clickCount={clickCount} setClickCount={setClickCount}>
        <div>{"Click Me 1"}</div>
        <ClickerIcon />
      </Counter>
      <Counter clickCount={clickCount} setClickCount={setClickCount}>
        <ClickerCircleIcon />
        <div>{"Click Me 2"}</div>
      </Counter>
      <CounterDisplay clickCount={clickCount} />
      <FilterDemo />
    </div>
  );
}

export default App;
