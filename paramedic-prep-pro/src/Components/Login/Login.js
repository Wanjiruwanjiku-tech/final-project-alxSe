// Login Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../Assets/images/user.png';
import passwordIcon from '../../Assets/images/password.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
       e.preventDefault();
       
       if (username && password) {
        navigate('/topics');
       } else {
        alert('Please enter valid credentials');
       }
    };
    return (
        <>
            <div className='login-container'>
                <div className='login-box'>
                    <h2>USER LOGIN</h2>
                    <div className='input-container'>
                        <div className='input-icon'>
                            <img src={userIcon} alt='user-icon' />
                        </div>
                        <input 
                            type='text' 
                            placeholder='Username' 
                            className='login-input'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    
                    {/* password */}
                    <div className='input-container'>
                        <div className='input-icon'>
                            <img src={passwordIcon} alt='PASSWD-icon' />
                        </div>
                        <input 
                            type='password' 
                            placeholder='Password' 
                            className='login-input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='login-button' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;