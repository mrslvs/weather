import { useEffect, useState } from 'react';
import '../assets/styles/index.scss';
import Register from './Register';
import Login from './Login';
import Header from './Header';

function App() {
    const [selection, setSelection] = useState('login');
    return (
        <>
            <div className="container">
                <Header setSelection={setSelection} />

                {(() => {
                    switch (selection) {
                        case 'login':
                            return <Login />;
                        case 'register':
                            return <Register />;
                        default:
                            return null; // Or any default component if needed
                    }
                })()}
            </div>
        </>
    );
}

export default App;
