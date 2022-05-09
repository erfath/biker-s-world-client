import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data.slice(0,6)));
    },[])
    return (
        <div className='container'>
            <h2 className='text-center m-5'>My Products</h2>
          <div className='items-container'>
          {
                items.map(item=> <Item
                key={item._id}
                item={item}
                >
                </Item>)
            }
          </div>
        </div>
    );
};

export default Items;