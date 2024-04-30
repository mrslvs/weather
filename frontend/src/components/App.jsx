import { useEffect, useState } from 'react';
import '../assets/styles/index.scss';
import Register from './Register';
import Login from './Login';

function App() {
    return (
        <>
            <div className="container">
                {/* <Register /> */}
                <br />
                <Login />
            </div>
        </>
    );
}

export default App;
