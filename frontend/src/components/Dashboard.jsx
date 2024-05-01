import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
import Header from './Header';

const Dashboard = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    useEffect(() => {
        console.log(lat + ',' + lon);
    }, [lat, lon]);

    return (
        <div>
            <Header />
            <Map setLat={setLat} setLon={setLon} />
        </div>
    );
};

export default Dashboard;
