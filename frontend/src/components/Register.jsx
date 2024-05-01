import React from 'react';
import axiosInstance from '../api/axiosInstance';
import { Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

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
            {/* <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className="form-control mb-3"
            /> */}
            <Form.Group controlId="username" className="mb-2">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="email" className="mb-2">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mb-2">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            {/* <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                className="form-control mb-3"
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="form-control mb-3"
            /> */}
            {/* <button type="submit" className="btn btn-primary">
                Register
            </button> */}
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;
