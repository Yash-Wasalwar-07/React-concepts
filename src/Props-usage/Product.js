import React from 'react';
import ItemDescription from './ItemDescription';
import ItemDescriptionClassBased from './ItemDescriptionClassBased';

function Product({ name, description, price }) {
    return (
        <>
            <div>
                <ItemDescription name={name} description={description} />
                <h4>${price}</h4>
            </div>

            <div>
                <ItemDescriptionClassBased name={name} description={description}
                />
            </div>
        </>
    )
}

export default Product
