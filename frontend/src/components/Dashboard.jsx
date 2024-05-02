import React, { useEffect, useState } from 'react';
import Map from './Map';
import Header from './Header';
import axiosInstance from '../api/axiosInstance';
import WeatherCard from './WeatherCard';

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const [gps, setGps] = useState([]);

    useEffect(() => {
        console.log(gps[0] + ',' + gps[1]);
        sendGPS();
    }, [gps]);

    const sendGPS = async () => {
        const gpsObj = {
            lat: gps[0],
            lon: gps[1],
        };

        try {
            const response = await axiosInstance.post('/gps', gpsObj, {
                withCredentials: true,
            });

            const cardData = {
                location: response.data.message.name,
            };
            console.log(response);
            setIdCounter((prevId) => prevId + 1);
            setWeatherData((prevData) => [...prevData, cardData]);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Header />
            <Map setGps={setGps} />
            <>
                {weatherData.map((cardData) => (
                    <WeatherCard key={idCounter} cardData={cardData} />
                ))}
            </>
        </div>
    );
};

export default Dashboard;
