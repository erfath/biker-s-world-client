import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const navigate = useNavigate();
    const navigateToManageItem = ()=>{
        navigate('/manage')
    }
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://biker-s-world-client.onrender.com/inventory')
        .then(res=>res.json())
        .then(data=>setItems(data.slice(0,6)));
    },[]);
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
          <div className='text-end mt-5 p-2'>
          <button onClick={()=> navigateToManageItem()} className='btn btn-link text-decoration-none'>See all Products</button>
          </div>
        </div>
    );
};

export default Items;