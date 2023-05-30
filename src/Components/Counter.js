import React, { useEffect, useState } from "react";
import "./Counter.css";
import { store } from "../Redux/Store";
import { decrement, increment } from "../Redux/action/action";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    updateState();
    store.subscribe(updateState)
  }, []);
  function updateState() {
    const state = store.getState();
    setCounter(state.counter);
  }

  const incrementBtn = () => {
    store.dispatch(increment());
  };

  const decrementBtn = () => {
    store.dispatch(decrement());
  };
  return (
    <div className="counter-header">
      <div className="inner-counter">Counter:-</div>
      <div>{counter}</div>
      <button onClick={decrementBtn}>decrement</button>
      <button onClick={incrementBtn}>Increment</button>
    </div>
  );
}

export default Counter;
