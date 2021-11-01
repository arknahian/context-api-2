import React from 'react';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const Categories = (props) => {
    return (
        <div>
            <h4>This is categories {props.count}</h4>
            <CategoriesDetails count={props.count}></CategoriesDetails>
        </div>
    );
};

export default Categories;