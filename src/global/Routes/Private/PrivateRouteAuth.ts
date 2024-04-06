// Layout.tsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface LayoutProps {
    isAuthenticated: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }


};

export default Layout;
