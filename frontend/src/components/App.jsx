import { useEffect, useState } from 'react';
import '../assets/styles/index.scss';
import Register from './Register';
import Login from './Login';
import Header from './Header';

function App() {
    return (
        <>
            <div className="container">
                <Header />
                {/* <Register /> */}
                <br />
                <Login />
            </div>
        </>
    );
}

export default App;
