import { useState } from "react";

import CountDisplay from "./CountDisplay";
import Counter from "./Counter";

function App() {
  const [buttonOneClicks, setButtonOneClicks] = useState(0);
  const [buttonTwoClicks, setButtonTwoClicks] = useState(0);

  return (
    <div>
      <Counter clicks={buttonOneClicks} setClicks={setButtonOneClicks} label={"Button 1"} style={{ margin: "auto" }} />
      <Counter clicks={buttonTwoClicks} setClicks={setButtonTwoClicks} label={"Button 2"} style={{ margin: "auto" }} />
      <CountDisplay clicks={buttonOneClicks} buttonLabel={"1"}/>
      <CountDisplay clicks={buttonTwoClicks} buttonLabel={"2"}/>
    </div>
  );
}

export default App;
