import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';

export interface IRootProps {
}

export function Root(props: IRootProps) {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}
