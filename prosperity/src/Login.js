import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const signIn = () => {
        //sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='assets/images/logo1.png' alt=''
                />

                <img src='assets/images/logo2.png' alt=''
                />
            </div>
            <Button type='submit' onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login;
