import { React, useState } from "react";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

function App() {
  // when click count is changed, store that new value in local storage
  // on initial render, set click count as value from local storage
  // create custom hook that does both these things for us

  const [clickCount, setClickCount] = useState(0);
  // console.log("clickCount:", clickCount);
  return (
    <div>
      <Counter clickCount={clickCount} setClickCount={setClickCount} />
      <CounterDisplay clickCount={clickCount} />
    </div>
  );
}

export default App;
