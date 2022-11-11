import { React, useState } from "react";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [clickCount, setClickCount] = useState(0);
  console.log("clickCount:", clickCount);
  return (
    <div>
      <Counter clickCount={clickCount} setClickCount={setClickCount} />
      <CounterDisplay clickCount={clickCount} />
    </div>
  );
}

export default App;
