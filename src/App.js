import { React, useState, useEffect } from "react";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import SortDemo from "./SortDemo";

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
      <Counter
        clickCount={clickCount}
        setClickCount={setClickCount}
        label={"Click Me 1"}
      />
      <Counter
        clickCount={clickCount}
        setClickCount={setClickCount}
        label={"Click Me 2"}
      />
      <CounterDisplay clickCount={clickCount} />
      <SortDemo />
    </div>
  );
}

export default App;
