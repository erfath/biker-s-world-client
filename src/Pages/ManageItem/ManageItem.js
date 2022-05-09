import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';
import Loading from '../Shared/Loading/Loading';

const ManageItem = () => {
    const [items, setItems] = UseItems();
    const navigate = useNavigate();
    const navigateTOAddItem = () => {
        navigate('/additem')
    }
    const handledelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                })

        }
    }
    return (
        <div>
            <h2 className='text-center'>Manage All Items</h2>
            <div className='d-flex justify-content-around'>
                <div>
                    {
                        items.map(item => <div key={item._id}>
                            <h4>{item.name} <button onClick={() => handledelete(item._id)} className='item-btn'>Delete</button></h4>
                        </div>)
                    }
                </div>
                <div>
                    <button onClick={() => navigateTOAddItem()} className='btn btn-info mt-5 p-3'>Add New Item</button>
                </div>
            </div>
            <div>
                <button onClick={() => navigateTOAddItem()} className='btn btn-info ms-2 p-3'>Add New Item</button>
            </div>

        </div>
    );
};

export default ManageItem;