import React, { useState } from "react";

const Counter = () => {
  const printHello = () => {
    console.log("hello world");
  };

  const [count, updateCount] = useState(10);

  var increment = () => {
    // imp thsi useState is only rendred once so if u update
    // count multiple times it will only be count as once
    // so update "count" my passing function to updateCount

    // increment count by 2

    // updateCount(count+1) this is not recomended

    // use this
    updateCount((prevVal) => prevVal + 1);
    updateCount((prevVal) => prevVal + 1);
  };
  var decrement = () => {
    updateCount((prevVal) => prevVal - 1);
    updateCount((prevVal) => prevVal - 1);
  };

  return (
    <div>
      <h1>Update counter</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
