import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Components/Routes/Home/Home';

export default function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate replace to="/"/>} /> 
                <Route index element={<Home/>} /> 
            </Routes> 
        </BrowserRouter>
    )
}
 