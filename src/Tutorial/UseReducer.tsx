import React, { useReducer } from "react";
interface State {
  count: number;
  error: string | null;
}

//define action. Action is the thing that signals for the state to change

interface Action {
  type: "increment" | "decrement";
}

const initialState = {
  count: 0,
  error: null,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasErr = newCount > 5;
      return {
        ...state,
        count: hasErr ? state.count : newCount,
        error: hasErr ? "Count cannot exceed 5" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasErr = newCount < 0;
      return {
        ...state,
        count: hasErr ? state.count : newCount,
        error: hasErr ? "Count cannot be less than 0" : null,
      };
    }
    default:
      return state;
  }
}
export default function Demo() {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [{ count, error }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span className="text-lg text-gray-400 my-3">UseReducer</span>

      <div className="tutorial bg-gray-100 p-20 flex flex-col gap-4">
        <div>Count Value: {count}</div>
        {error && <div className="text-sm text-red-500 mb-2">{error}</div>}
        <div className="flex flex-col gap-4">
          <div>
            <button
              onClick={() => dispatch({ type: "decrement" })}
              className="mb-2 p-4 rounded-md bg-red-400 text-white mr-4"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: "increment" })}
              className="mb-2 p-4 rounded-md bg-green-400  text-white"
            >
              Increment
            </button>
          </div>
          {/* <div>
          <span className="text-sm text-red-500">{state.error}</span>
        </div> */}
        </div>
      </div>
    </div>
  );
}
