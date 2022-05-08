import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateToRegister = (event) => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async event => {
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='form'>
            <h2 className='text-center mx-auto w-50 p-2'>Login</h2>
            <Form onSubmit={handleLogin} className='formField w-50 mx-auto p-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button className='bg-primary w-100' type="submit">
                    Login
                </Button>
                <div className='text-center'>
                    <p> <Link to='/register' onClick={resetPassword} className='text-danger text-decoration-none'>Reset Password?</Link> <span>Don't have an account?</span> <Link to='/register' onClick={navigateToRegister} className='text-decoration-none'>Please Register</Link> </p>
                </div>
                <SocialLogin></SocialLogin>
            </Form>

        </div>
    );
};

export default Login;