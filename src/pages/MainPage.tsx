import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet} from 'react-router-dom';

const MainPage: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div  className="flex flex-col p-4 mt-16 sm:ml-64">
            <Outlet />
            </div>
            
        </>
    );
};

export default MainPage;
