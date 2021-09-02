import React from 'react'

function ItemDescription({ name, description }) {
    return (
        <div>
            <h3>{name}</h3>
            <p><i>{description}</i></p>
        </div>
    )
}

export default ItemDescription
