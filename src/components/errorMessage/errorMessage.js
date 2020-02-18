import React from 'react';
import './errorMessage.css';
import img from './error.png'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'/>
            <span className="messageError">Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;