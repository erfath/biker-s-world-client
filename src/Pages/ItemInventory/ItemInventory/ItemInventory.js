import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import './ItemInventory.css'

const ItemInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <div className='inventory-container w-50 mx-auto text-center border border-dark mt-3'>
                <img src={item.img} alt="" />

                <div className='detail text-center'>
                    <h5>{item.name}</h5>
                    <p className='mb-0'><strong>Price: $</strong>{item.price}</p>
                </div>
                <div className='p-2'>
                    <p><strong>Supplier's Name: </strong>{item.supplier}</p>
                    <p><strong>Available Quantity: </strong>{item.quantity}</p>
                    <p>{item.description}</p>
                </div>
                <div className='d-flex justify-content-between p-2'>
                    <div className='d-flex flex-column'>
                        <input className='rounded p-2' type="text" placeholder='Enter Number' />
                        <input className='item-btn text-center mt-1' type="submit" value="Update Quantity" />
                    </div>
                    <div>
                        <button className='item-btn mt-5'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemInventory;