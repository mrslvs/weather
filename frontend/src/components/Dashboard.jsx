import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        setUser({ user: '', isLoggedIn: false });
        navigate('/');
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
