import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/login')
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        // console.log('Updated profile');
        navigate('/login');
        console.log(email, password)
        
    }
    return (
        <div className='form'>
            <h2 className='text-center mx-auto w-50 p-2'>Please Register Here</h2>
            <Form onSubmit={handleRegister} className='formField w-50 mx-auto p-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button className='bg-primary w-100' type="submit">
                    Register
                </Button>
                <div className='text-center'>
            <p><span>Already have an account?</span> <Link to='/login' onClick={navigateToLogin} className='text-decoration-none'>Please Login</Link> </p>
            </div>
            </Form>
            
        </div>
    );
};

export default Register;