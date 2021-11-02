import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoriesDetails = (props) => {
    const categories = useContext(categoryContext)
    return (
        <div>
            <h4>This is categories Details {categories}</h4>
        </div>
    );
};

export default CategoriesDetails;