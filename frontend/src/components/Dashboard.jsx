import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const Dashboard = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axiosInstance.post('/logout', null, {
                withCredentials: true,
            });
            setUser({ user: '', isLoggedIn: false });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <p>Dash</p>
            <button type="submit" onClick={logout} className="btn btn-danger">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
