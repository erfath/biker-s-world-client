import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseItemDetails from '../../Hooks/UseitemDetails/UseItemDetails';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = UseItemDetails(itemId)
    return (
        <div>
            <h2>Item Details {itemId}</h2>
            <h5>{itemId.name}</h5>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <div className='text-center'>
                <button className='btn btn-primary'>Deliverd</button>
            </div>
            <input type="number" name="" id="" />
        </div>
    );
};

export default ItemDetails;