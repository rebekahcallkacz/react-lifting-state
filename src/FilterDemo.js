import { React, useEffect, useState } from "react";

const alphaArray = ["dog", "cat", "bird", "hamster"];
const numArray = [100, 40, 25];
const dictArray = [
  { Title: "Title A", date: "11/20/22" },
  { Title: "Title B", date: "02/02/23" },
  { Title: "Title C", date: "01/30/23" },
];

const FilterDemo = () => {
  const [originalArray, _setOriginalArray] = useState(dictArray);
  const [displayArray, setDisplayArray] = useState(dictArray);

  useEffect(() => {
    if (displayArray.length > 2) {
      const filteredArray = originalArray.filter(
        (item) => item.Title !== "Title A"
      );
      setDisplayArray(filteredArray);
    }
  }, [displayArray, originalArray]);

  console.log("original", originalArray);
  console.log("display", displayArray);

  return (
    <div>
      <h1>My filtered list</h1>
      {displayArray.map((item) => {
        return <div key={item.Title}>{item.Title}</div>;
      })}
    </div>
  );
};

export default FilterDemo;
