import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from "./../Category/Categories";

const Home = () => {
    const category = useContext(categoryContext);
    return (
        <div style={{border: "1px solid red"}}>
            <h1>This is home {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;