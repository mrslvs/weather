import React from 'react';
import useAuth from './hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
    const { user } = useAuth();

    return user.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;
