import React from 'react';
import notFound from '../../../Images/404.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger p-3'>Opppppps!! <br /> The page you are looking for is not available here</h2>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;