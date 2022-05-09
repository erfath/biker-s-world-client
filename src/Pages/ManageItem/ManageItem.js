import React from 'react';
import UseItems from '../../Hooks/UseItems/UseItems';

const ManageItem = () => {
const [items] = UseItems();
    return (
        <div>
            <h2>manage items</h2>
            {
                items.map(item => <div key={item._id}>
                    <h4>{item.name}</h4>
                </div>)
            }
        </div>
    );
};

export default ManageItem;