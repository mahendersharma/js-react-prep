import React, { useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
  if (action.type == 'incremented_age') {
    return {
      age: state.age + 1,
    };
  } else if (action.type == 'decrimented_age') {
    return {
      age: state.age - 1,
    };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <div>
      {state.age}
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' });
        }}
      >
        Age Incerment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrimented_age' });
        }}
      >
        Age decriment
      </button>
    </div>
  );
}

//
// what is a useReducer
// useReducer  is a hook its handle for complex state and multi-step state logic
