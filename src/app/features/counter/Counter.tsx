import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue, reset } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);
  const addedValue = Number(userInput) || 0;
  const resetAll = () => {
    setUserInput(0);
    dispatch(reset());
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(addedValue))}>
          Add Value
        </button>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </div>
  );
}
