import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className='text-center'>
            <Spinner animation="border" variant="primary" />;
        </div>
        </div>
    );
};

export default Loading;