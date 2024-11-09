import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/login/authorized');
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    navigate('/topics');
                } else {
                    alert('Authorization failed');
                    navigate('/login');
                }
            } catch (error) {
                console.error('OAuth callback error:', error);
                alert('An error occurred. Please try again.');
                navigate('/login');
            }
        };

        fetchUser();
    }, [navigate]);

    return <div>Loading...</div>;
};

export default OAuthCallback;