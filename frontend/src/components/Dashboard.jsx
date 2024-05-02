import React, { useEffect, useState } from 'react';
import Map from './Map';
import Header from './Header';
import axiosInstance from '../api/axiosInstance';
import WeatherCard from './WeatherCard';

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState([]);
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

            const {
                id,
                location,
                country,
                feels_like,
                humidity,
                pressure,
                temp,
                temp_min,
                temp_max,
                sunrise,
                sunset,
                weather,
            } = response.data.message;
            const cardData = {
                id,
                location,
                country,
                feels_like,
                humidity,
                pressure,
                temp,
                temp_min,
                temp_max,
                sunrise,
                sunset,
                weather,
            };
            // console.log(cardData);
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
                    <WeatherCard key={cardData.id} cardData={cardData} />
                ))}
            </>
        </div>
    );
};

export default Dashboard;
