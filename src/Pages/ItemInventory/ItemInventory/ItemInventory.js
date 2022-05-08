import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

const ItemInventory = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `http://localhost:3000/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data));
    },[id])
    return (
        <div>
            <h2>inventory {id}</h2>
            <p>name: {item.name}</p>
        </div>
    );
};

export default ItemInventory;