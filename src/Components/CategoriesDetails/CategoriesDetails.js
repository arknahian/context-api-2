import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoriesDetails = (props) => {
    const categories = useContext(categoryContext)
    return (
        <div>
            <h4>This is categories Details {props.count}</h4>
            <h6>Selected category {categories}</h6>
        </div>
    );
};

export default CategoriesDetails;