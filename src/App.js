import React, { useState } from "react";
import './App.css';
import Product from "./Props-usage/Product";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="app">
      {/* Demo of state in React */}
      <h1>Welcome to my counter</h1>
      <h3>count : {count}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      {/* Props demonstration */}
      <Product name='Google Home' description='Your AI partner' price={59.99} />
      <Product name='MacBook Pro' description='Best Laptop in the world' price={2000} />
      <Product name='Iphone 12' description='Best Smartphone of Universe' price={1200} />
    </div>
  );
}

export default App;
