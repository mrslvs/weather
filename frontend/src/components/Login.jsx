import React from 'react';
import axiosInstance from '../api/axiosInstance';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();

        const loginData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await axiosInstance.post('/login', loginData, {
                withCredentials: true,
            });
            const tempUser = {
                userId: response.data.message.userId,
                username: response.data.message.username,
            };
            setUser({ user: tempUser, isLoggedIn: true });
            navigate('/app');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={login} className="container">
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className="form-control mb-3"
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    );
};

export default Login;
