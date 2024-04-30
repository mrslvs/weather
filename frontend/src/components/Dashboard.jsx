import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Map from './Map';

const Dashboard = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    useEffect(() => {
        console.log(lat + ',' + lon);
    }, [lat, lon]);

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
            <Map setLat={setLat} setLon={setLon} />
        </div>
    );
};

export default Dashboard;
