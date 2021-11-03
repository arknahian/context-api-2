import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import Product from "./Components/Product/Product";

export const categoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <categoryContext.Provider value={[count, setCount]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
      <Product></Product>
    </categoryContext.Provider>
  );
}

export default App;
