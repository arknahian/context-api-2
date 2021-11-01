import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const categoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <categoryContext.Provider value={count}>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
