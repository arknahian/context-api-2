import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is shipment</h1>
            <h2>Shipment Count {category}</h2>
            <button onClick={() => setCategory(category + 1)}>Click me to increase</button>
        </div>
    );
};

export default Shipment;