import React from 'react';

const Description = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h1>This is details {name}</h1>
        </div>
    );
};

export default Description;