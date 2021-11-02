import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <p>This is count {category}</p>
            <h1>This is header {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increase</button>
        </div>
    );
};

export default Header;