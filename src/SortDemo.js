import React from "react";
const alphaArray = ["dog", "cat", "bird", "hamster"];
const numArray = [100, 40, 25];
const dictArray = [
  { Title: "Title A", date: "11/20/22" },
  { Title: "Title B", date: "02/02/23" },
  { Title: "Title C", date: "01/30/23" },
];

function SortDemo() {
  dictArray.sort(function (objectA, objectB) {
    if (objectA.Title < objectB.Title) return -1;
    if (objectA.Title > objectB.Title) return 1;
    return 0;
  });
  console.log(dictArray);
  return <div>{`${dictArray}`}</div>;
}

export default SortDemo;
