import { React, useState } from "react";

function Counter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const newClickCount = clicks + 1;
    setClicks(newClickCount);
    console.log("another click!");
    console.log(clicks);
  };

  return <button onClick={handleClick}>Click Me!</button>;
}

export default Counter;
