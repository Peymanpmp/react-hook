import './App.css';
import Sample from './Sample';
import A from './A';
import React, { useReducer } from 'react';


export const Counter = React.createContext()

const initialValue = 0

const reducer = (state, action) => {
  switch (action) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

function App() {
  const [cunter, dispatch] = useReducer(reducer, initialValue)
  return (
    <div className="App">
      {/* <Test /> */}
      <Sample />
      <Counter.Provider value={{cunter:cunter,dispatch:dispatch}}>
        
        <A />
      </Counter.Provider>
    </div>
  );
}

export default App;
