import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const url = `https://biker-s-world-client.onrender.com/inventory`;
        fetch(url, {
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };
    return (
        <div className='form'>
            <h2 className='text-center mx-auto w-50 p-2'>Add Item</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='formField w-50 mx-auto p-2 d-flex flex-column'>
                <input className='mb-2' placeholder="Item Name" {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder="Photo URL" {...register("img")} />
                <input className='mb-2' placeholder="Price" type="number" {...register("price")} />
                <input className='mb-2' placeholder="Quantity" type="number" {...register("quantity")} />
                <input className='mb-2' placeholder="Supplyer's name" {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder="Short Description" {...register("description")} />
                <input className='btn btn-primary' type="submit" value='Add Item' />
            </Form>
        </div>
    );
};

export default AddItem;