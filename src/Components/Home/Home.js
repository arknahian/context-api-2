import React from 'react';
import Categories from "./../Category/Categories";

const Home = (props) => {
    return (
        <div style={{border: "1px solid red"}}>
            <h1>This is home {props.count}</h1>
            <Categories count={props.count}></Categories>
        </div>
    );
};

export default Home;