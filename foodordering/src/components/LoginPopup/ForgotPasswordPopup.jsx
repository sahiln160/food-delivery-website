import React, { useState } from 'react';
import './ForgotPasswordPopup.css';
// import axios from 'axios';

const ForgotPasswordPopup = ({ setShowForgotPassword }) => {

    return (
        <div className='forgot-password-popup'>
            <div className='forgot-password-container'>
                <h2>Forgot Password?</h2>
                <p>Enter your email, and send you a password reset link.</p>
                <form>
                    <input
                        type='email'
                        placeholder='Enter your email' required
                    />
                    <button type='submit' >Send</button>
                </form>

                <button className='close-btn' onClick={() => setShowForgotPassword(false)}>Close</button>
            </div>
        </div>
    );
};

export default ForgotPasswordPopup;