import React, { useContext, useState } from 'react';
import { productContext } from '../Product/Product';
import Description from "./../Description/Description";

const allProducts = [
    {name: "Lenovo", category: "laptop"}, {name: "IMac", category: "laptop"},{name: "Dell", category: "laptop"},
    {name: "Iphone", category: "mobile"}, {name: "Samsung", category: "mobile"},{name: "Nokia", category: "mobile"},
    {name: "Cannon", category: "camera"}, {name: "Nikkon", category: "camera"},{name: "Sony", category: "camera"},
];


const ProductDetails = () => {
    const [allProduct, setAllProduct] = useState([])
    return (
        <div>
            {
                allProduct.map(pd => <Description product={pd}></Description>)
            }
        </div>
    );
};

export default ProductDetails;