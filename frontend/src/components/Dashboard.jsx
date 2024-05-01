import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Map from './Map';
import Header from './Header';
import axiosInstance from '../api/axiosInstance';

const Dashboard = () => {
    const { user, setUser } = useAuth();

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    useEffect(() => {
        console.log(lat + ',' + lon);
        sendGPS();
    }, [lat, lon]);

    const sendGPS = async () => {
        const gps = {
            lat: lat,
            lon: lon,
        };

        try {
            const response = await axiosInstance.post('/gps', gps, {
                withCredentials: true,
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Header />
            <Map setLat={setLat} setLon={setLon} />
        </div>
    );
};

export default Dashboard;
