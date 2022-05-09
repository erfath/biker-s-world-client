import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

const ItemInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <div className='w-50 mx-auto text-center border border-dark mt-3'>
                <img  src={item.img} alt="" />

                <div className='detail text-center'>
                    <h5>{item.name}</h5>
                    <p className='mb-0'><strong>Price: $</strong>{item.price}</p>
                </div>
                <div className='p-2'>
                    <p><strong>Supplier's Name: </strong>{item.supplier}</p>
                    <p><strong>Available Quantity: </strong>{item.quantity}</p>
                    <p>{item.description}</p>
                </div>
                <div>
                    <button className='item-btn w-25'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default ItemInventory;