import { useEffect, useState } from 'react';
import '../assets/styles/index.scss';
import Register from './Register';
import Login from './Login';
import Header from './Header';

function App() {
    const [selection, setSelection] = useState('login');

    useEffect(() => {
        console.log(selection);
    }, [selection]);

    return (
        <>
            <div className="container">
                <Header setSelection={setSelection} />
                {/* <Register /> */}
                <br />
                <Login />
            </div>
        </>
    );
}

export default App;
