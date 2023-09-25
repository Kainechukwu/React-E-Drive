import React, { useState, useMemo } from "react";
import { initialItems } from "./DummyData";
// const initialItems = [
//   {
//     id: 100,
//     isSelected: false,
//   },
//   {
//     id: 200,
//     isSelected: true,
//   },
//   {
//     id: 300,
//     isSelected: false,
//   },
// ];

// console.log("InitialItems: " + initialItems[4].id);

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  //use memo works like computed property in vue. It is only evaluated on initial render of the component. And it does not re-render until its dependency (which is specified in the array) changes.

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );

  return (
    <div className="tutorial">
      <span className="text-lg text-gray-400 my-3">Use Memo</span>

      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button
        className="rounded-md p-2 text-white bg-green-300"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Demo;
