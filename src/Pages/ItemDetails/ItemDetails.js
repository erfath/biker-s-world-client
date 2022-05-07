import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>Item Details {itemId}</h2>
            <div className='text-center'>
                <Link to='/inventory'>
                    <button className='btn btn-primary'>Inventory Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetails;