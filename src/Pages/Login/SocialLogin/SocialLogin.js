import React from 'react';
import googleLogo from '../../../Images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            <div className='text-center'>
                <button className='btn btn-info '> 
                <img style={{ height: '30px' }} className='mx-2' src={googleLogo} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;