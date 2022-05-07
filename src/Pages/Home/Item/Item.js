import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { name, id, img, quantity, description, supplier, price } = item;
    const navigate = useNavigate();
    const navigateToItemDetails = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div>
            <div className='item shadow'>
                <img src={img} alt="" />

                <div className='detail text-center'>
                    <h5>{name}</h5>
                    <p className='mb-0'><strong>Price: $</strong>{price}</p>
                </div>
                <div className='p-2'>
                <p><strong>Supplier's Name: </strong>{supplier}</p>
                <p><strong>Available Quantity: </strong>{quantity}</p>
                <p>{description}</p>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='item-btn w-25'>Select</button>
                    <button onClick={()=>navigateToItemDetails(id)} className='item-btn w-25'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;