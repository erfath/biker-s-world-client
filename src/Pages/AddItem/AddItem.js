import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css'

const AddItem = () => {
    return (
        <div className='form'>
            <h2 className='text-center mx-auto w-50 p-2'>Add Item</h2>
            <Form className='formField w-50 mx-auto p-2'>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Item Name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Supplyer's name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Short Description" required />
                </Form.Group>
                <Button className='bg-primary w-100' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;