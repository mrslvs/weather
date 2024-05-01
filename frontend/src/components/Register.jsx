import React from 'react';
import axiosInstance from '../api/axiosInstance';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const register = async (e) => {
        e.preventDefault();

        const registerData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await axiosInstance.post('/register', registerData, {
                withCredentials: true,
            });
            console.log('success');
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        // <form onSubmit={register} className="container">
        <Form onSubmit={register}>
            <Form.Group controlId="username" className="mb-2">
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="email" className="mb-2">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mb-2">
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;
