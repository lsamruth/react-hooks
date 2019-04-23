import React, { useReducer } from "react";

const initialState = { counter: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "INC": return { counter: state.counter + 1 };
        case "DEC": return { counter: state.counter - 1 };
        case "RESET": return initialState;
        default: throw new Error();

    }

}

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1> count {state.counter}</h1>
            <button onClick={() => { dispatch({ type: 'INC' }) }}>Increment counter</button>
            <button onClick={() => { dispatch({ type: 'DEC' }) }}>Decrement counter</button>
            <button onClick={() => { dispatch({ type: 'RESET' }) }}>Reset counter</button>
        </div>);
}

export default UseReducerDemo;