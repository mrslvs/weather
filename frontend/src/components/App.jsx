import { useEffect, useState } from 'react';
import '../assets/styles/index.scss';
import Register from './Register';
import Map from './Map';

function App() {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    useEffect(() => {
        console.log(lat + ',' + lon);
    }, [lat, lon]);

    return (
        <>
            <div className="container">
                <Register />
                <Map setLat={setLat} setLon={setLon} />
            </div>
        </>
    );
}

export default App;
