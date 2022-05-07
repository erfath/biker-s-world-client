import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])
    return (
        <div className='container'>
            <h2 className='text-center m-5'>My Products</h2>
          <div className='items-container'>
          {
                items.map(item=> <Item
                key={item.id}
                item={item}
                >
                </Item>)
            }
          </div>
        </div>
    );
};

export default Items;