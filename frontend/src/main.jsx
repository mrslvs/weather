import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
import Dashboard from './components/Dashboard.jsx';
import RequireAuth from './RequireAuth.jsx';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route element={<RequireAuth />}>
                        <Route exact path="/app" element={<Dashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    </React.StrictMode>
);
