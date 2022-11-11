import { React } from "react";

function Counter({ clickCount, setClickCount }) {
  const handleClick = () => {
    const newClickCount = clickCount + 1;
    console.log("newClickCount:", newClickCount);
    console.log("setting clickCount equal to newClickCount");
    setClickCount(newClickCount);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Counter;
