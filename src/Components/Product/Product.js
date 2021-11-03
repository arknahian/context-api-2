import React, { createContext, useState } from 'react';
import ProductDetails from "./../ProductDetails/ProductDetails";

export const productContext = createContext();
const Product = () => {
    const [product, setProduct] = useState([]);
    return (

         <productContext.Provider value={"laptop"}>
                <h1>This is product</h1>
                <ProductDetails></ProductDetails>
         </productContext.Provider>
        
    );
};

export default Product;