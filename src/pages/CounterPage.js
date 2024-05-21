import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  if (action.type === "increment") {
    // Return a new state object
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    // Return a new state object
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "add-value-to-count") {
    // Return a new state object
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0, // Need to reset!
    };
  }
  if (action.type === "change-value-to-add") {
    console.log(state);
    // Return a new state object
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: "change-value-to-add",
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    dispatch({
      type: "add-value-to-count",
      // payload: state.valueToAdd, // NOT NEEDED!!!
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
