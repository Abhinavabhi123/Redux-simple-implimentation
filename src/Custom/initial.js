import React from "react";
import useCounter from "./custom";

const MyComponent = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default MyComponent
