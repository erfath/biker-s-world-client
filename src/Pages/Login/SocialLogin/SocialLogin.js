import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Images/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMsg;

    if (error) {
           errorMsg = <p className='text-danger'>Error: {error.message}</p> 
      }

      if(user){
          navigate('/home')
      }
      if (loading) {
        return  <Loading></Loading>
      }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            <p className='text-center'>{errorMsg}</p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info '> 
                <img style={{ height: '30px' }} className='mx-2' src={googleLogo} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;