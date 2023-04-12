import React from "react";

function Counter({clicks, setClicks, label}) {
  const handleClick = () => {
    const newClickCount = clicks + 1;
    setClicks(newClickCount);
    console.log(clicks);
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default Counter;
