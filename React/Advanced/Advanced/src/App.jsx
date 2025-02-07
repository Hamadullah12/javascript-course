import { act, useReducer, useState } from "react";

function App() {
  // here it startes bank project

  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <div>
      {state.balance}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );

  //here it ends

  // const [state, dispatch] = useReducer(reducer, { count: 0, IncrementBy: 1 });
  // function reducer(state, action) {
  //   if (action.type == "increment") {
  //     // return state + action.payload;
  //     return { ...state, count: state.count + state.IncrementBy };
  //   }
  //   if (action.type == "decrement") {
  //     // return state - action.payload;
  //     return { ...state, count: state.count - state.IncrementBy };
  //   }
  //   if (action.type == "setIncrement") {
  //     return { ...state, IncrementBy: action.payload };
  //   }
  // }
  // return (
  //   <div>
  //     {state.count}
  //     <input
  //       value={state.IncrementBy}
  //       type="text"
  //       onChange={(e) =>
  //         dispatch({
  //           type: "setIncrement",
  //           payload: Number(e.target.value),
  //         })
  //       }
  //     />
  //     <button onClick={() => dispatch({ type: "increment" })}>increment</button>
  //     <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
  //   </div>
  // );
}

export default App;
