import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const Map = ({ setGps }) => {
    useEffect(() => {
        const map = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.on('click', (e) => {
            const { lat, lng } = e.latlng;

            setGps([lat, lng]);
        });

        return () => {
            map.off('click');
            map.remove();
        };
    }, [setGps]);

    return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
