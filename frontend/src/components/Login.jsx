import React from 'react';
import axiosInstance from '../api/axiosInstance';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={login}>
            <Form.Group controlId="username" className="mb-2">
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="password" className="mb-2">
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;
