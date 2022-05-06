import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import AgregarCita from '../componente/AgregarCita';
import Listar from '../componente/Listar';

const DashboarRouters = () => {
    return (
        
            <Routes>
            <Route path="/" element={ <AgregarCita/>}/>
            <Route path="/list" element={<Listar/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            
       
    );
};

export default DashboarRouters;